import React from "react";
import "../../styles/VistaDetalle/BookingForm.css";

function BookingForm() {
  return (
    //     <div className="booking-form">
    //       <h3 className="form-title">BOOKING FORM</h3>
    //       <p className="form-description">
    //         Malesuada incidunt excepturi proident quo eros? Sinterdum praesent magnis, eius cumque.
    //       </p>
    //       <form>
    //         <div className="input-group">
    //           <input type="text" placeholder="Your Name..." required />
    //         </div>
    //         <div className="input-group">
    //           <input type="email" placeholder="Your Email..." required />
    //         </div>
    //         <div className="date-group">
    //           <div className="input-group">
    //             <label>Check-in Date</label>
    //             <input type="date" required />
    //           </div>
    //           <div className="input-group">
    //             <label>Check-out Date</label>
    //             <input type="date" required />
    //           </div>
    //         </div>
    //         <button type="submit" className="submit-btn">INQUIRY NOW</button>
    //       </form>
    //     </div>
    //   );
    // }
    <div className="booking-form">
      <h3 className="form-title">BOOKING FORM</h3>
      <p className="form-description">
        Malesuada incidunt excepturi proident quo eros? Sinterdum praesent
        magnis, eius cumque.
      </p>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Your Name..." required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Your Email..." required />
        </div>
        <div className="date-group">
          <div className="input-group">
            <label>Check-in Date</label>
            <input type="date" required />
          </div>
          <div className="input-group">
            <label>Check-out Date</label>
            <input type="date" required />
          </div>
        </div>
        <button type="submit" className="submit-btn">
          INQUIRY NOW
        </button>
      </form>
    </div>
  );
}
export default BookingForm;
