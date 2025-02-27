
import React, { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore"; 

const Checkout = ({ doctorId, doctor, selectedTimeslot, selectedDate }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const patientId = sessionStorage.getItem("userid");
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: doctor.fee, 
                    },
                },
            ],
        });
    };

    const onApproveOrder = async (data, actions) => {
        return actions.order.capture().then(async (details) => {
            console.log(`Transaction completed by ${details.payer.name.given_name}`);

            // Booking the appointment in Firestore
            if (patientId) {
                const success = await handleBooking();
                if (success) {
                    navigate('/success');
                } else {
                    console.error("Booking failed, staying on page.");
                }
            } else {
                console.error("Patient ID not found");
            }
        });
    };

    const handleBooking = async () => {
        try {
            // Check for missing values
            if (!selectedDate || !selectedTimeslot || !doctorId || !patientId) {
                console.error("Missing booking details", { selectedDate, selectedTimeslot, doctorId, patientId });
                return false;
            }

            console.log("Selected Date:", selectedDate);
            console.log("Selected Timeslot:", selectedTimeslot);

            // Extract hours and minutes from selectedTimeslot
            const [time, period] = selectedTimeslot.split(" ");
            const [hours, minutes] = time.split(":").map(Number);

            // Convert 12-hour format to 24-hour format
            let formattedHours = period === "PM" && hours !== 12 ? hours + 12 : hours;
            if (period === "AM" && hours === 12) formattedHours = 0; 

            // Create a Date object using selectedDate
            const selectedDateTime = new Date(selectedDate);
            selectedDateTime.setHours(formattedHours, minutes, 0);

            if (isNaN(selectedDateTime.getTime())) {
                throw new Error("Invalid date-time value");
            }

            console.log("Final Date-Time Object:", selectedDateTime);

            // Convert to Firestore Timestamp
            const timeslotTimestamp = Timestamp.fromDate(selectedDateTime);

            // Save booking in Firestore
            await addDoc(collection(firestore, "bookings"), {
                doctorId,
                patientId,
                timeslot: timeslotTimestamp,
                status: "confirmed",
                createdAt: Timestamp.now(),
            });

            console.log("Booking successfully added to Firestore");
            return true;
        } catch (error) {
            console.error("Error adding booking:", error);
            return false;
        }
    };

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                        <option value="INR">🇮🇳 INR</option>
                    </select>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={onCreateOrder}
                        onApprove={onApproveOrder}
                    />
                </>
            )}
        </div>
    );
};

export default Checkout;
