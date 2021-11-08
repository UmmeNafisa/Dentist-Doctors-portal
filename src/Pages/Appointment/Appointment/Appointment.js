import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinentmentsHeader from '../AppointmentHeader/AppoinentmentsHeader';
import AvailableAppointment from '../AvailableAppoinment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinentmentsHeader date={date} setDate={setDate}></AppoinentmentsHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;