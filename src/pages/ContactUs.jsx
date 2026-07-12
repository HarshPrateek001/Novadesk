import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Popper Success Icon SVG
const IconPopper = () => (
  <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M38 26L18 46" stroke="#2E29FF" strokeWidth="2" />
    <path d="M32 16l-5 5" stroke="#2E29FF" strokeWidth="2" />
    <path d="M48 32l-5 5" stroke="#2E29FF" strokeWidth="2" />
    <path d="M34 38h-8v-8" stroke="#2E29FF" strokeWidth="2" />
    <path d="M30 42l-15 15a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8L25 37" stroke="#2E29FF" strokeWidth="2" />
    <circle cx="44" cy="18" r="3" fill="#8B5CF6" />
    <circle cx="52" cy="24" r="2" fill="#2E29FF" />
    <circle cx="40" cy="30" r="2.5" fill="#8B5CF6" />
    <circle cx="35" cy="10" r="1.5" fill="#2E29FF" />
    <circle cx="58" cy="16" r="2" fill="#8B5CF6" />
    <line x1="44" y1="12" x2="46" y2="8" stroke="#8B5CF6" strokeWidth="1.5" />
    <line x1="54" y1="20" x2="58" y2="22" stroke="#2E29FF" strokeWidth="1.5" />
  </svg>
);

const IconBackArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const IconVideo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 7l-7 5 7 5V7z"></path>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconGlobe = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default function ContactUs() {
  const [step, setStep] = useState('dateTime'); // 'dateTime' | 'details' | 'success'
  const [selectedDate, setSelectedDate] = useState(null); // Selected day of July 2026
  const [selectedSlot, setSelectedSlot] = useState(null); // Selected time slot (e.g. '8:00am')
  const [confirmedSlot, setConfirmedSlot] = useState(null); // Confirmed time slot for Details Form
  const [showGuests, setShowGuests] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    phone: '',
    guestEmail: ''
  });

  const calendarDays = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, null, null
  ];

  const timeSlots = ['6:00am', '6:30am', '7:00am', '7:30am', '8:00am', '9:30am', '10:00am', '10:30am', '11:00am'];

  // Days that have available dots
  const availableDays = [8, 9, 10, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setSelectedSlot(null);
  };

  const handleNextStep = () => {
    if (selectedDate && selectedSlot) {
      setConfirmedSlot({
        date: selectedDate,
        time: selectedSlot
      });
      setStep('details');
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBack = () => {
    setStep('dateTime');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const web3formsAccessKey = "84eae225-ad99-45fc-8d8f-8f7f2e6514da"; 
    const discordWebhookUrl = ""; 
    const telegramBotToken = "";
    const telegramChatId = "";



    try {
      const uuidMatch = web3formsAccessKey.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
      const cleanKey = uuidMatch ? uuidMatch[0] : web3formsAccessKey.trim();

      if (cleanKey && cleanKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: cleanKey,
            subject: `New Meeting Booked: ${formData.name}`,
            from_name: "NOVADESK Scheduler",
            name: formData.name,
            email: formData.email,
            phone: `+91 ${formData.phone}`,
            guest_email: formData.guestEmail || "No guests",
            message: formData.projectDetails,
            appointment: `July ${confirmedSlot?.date}, 2026 at ${confirmedSlot?.time}`
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || "Web3Forms submission failed");
        }
      }

      if (discordWebhookUrl) {
        await fetch(discordWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📅 **New Calendly Meeting Booked!**\n\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Phone:** +91 ${formData.phone}\n**Guest:** ${formData.guestEmail || 'None'}\n**Time:** July ${confirmedSlot?.date}, 2026 at ${confirmedSlot?.time}\n**Project/Requirement:**\n\`\`\`\n${formData.projectDetails}\n\`\`\``
          })
        });
      }

      if (telegramBotToken && telegramChatId) {
        const text = `📅 *New Calendly Meeting Booked!*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Time:* July ${confirmedSlot?.date}, 2026 at ${confirmedSlot?.time}\n*Project:* ${formData.projectDetails}`;
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: text,
            parse_mode: "Markdown"
          })
        });
      }

      setStep('success');
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission encountered a network issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormattedDateString = (day) => {
    if (!day) return '';
    return `Wednesday, July ${day}, 2026`;
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NovaDesk",
    "description": "Get in touch with NovaDesk to discuss your tech requirements.",
    "url": "https://www.novadesk.site/contact-us"
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Schedule a free consultation or get in touch with our team to start building your next big idea."
        url="/contact-us"
        schema={contactSchema}
      />
      <div className="nd-contact-page">
      <style>{`
        .nd-contact-page {
          padding-top: 130px;
          padding-bottom: 100px;
          background-color: #f8fafc;
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .nd-contact-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px auto;
          padding: 0 20px;
        }
        .nd-contact-title {
          font-size: 38px;
          font-weight: 800;
          color: #0b0f19;
          line-height: 1.25;
          letter-spacing: -0.5px;
        }
        .nd-contact-title .blue-text {
          color: #2E29FF;
          background: linear-gradient(90deg, #2E29FF, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nd-contact-title .purple-text {
          color: #8B5CF6;
          background: linear-gradient(90deg, #8B5CF6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Calendly Layout Box */
        .nd-calendly-card {
          width: calc(100% - 40px);
          margin: 0 20px;
          max-width: ${step === 'success' ? '540px' : (selectedDate && step === 'dateTime' ? '1020px' : '780px')};
          min-height: 600px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
          border-radius: 12px;
          display: flex;
          overflow: hidden;
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (max-width: 900px) {
          .nd-calendly-card {
            flex-direction: column;
            width: calc(100% - 32px);
            margin: 0 16px;
            max-width: 100% !important;
            min-height: auto;
          }
        }
        
        /* Left Column */
        .nd-calendly-left {
          width: 320px;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          background-color: #ffffff;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .nd-calendly-left {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            padding: 30px 24px;
          }
        }
        .nd-calendly-left-top {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nd-calendly-left-back {
          background: none;
          border: none;
          color: #475569;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 4px;
          width: fit-content;
          transition: color 0.2s;
        }
        .nd-calendly-left-back:hover {
          color: #2E29FF;
        }
        .nd-calendly-brand {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }
        .nd-calendly-duration {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #475569;
          font-weight: 700;
        }
        .nd-calendly-location {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #475569;
          line-height: 1.4;
          font-weight: 600;
        }
        .nd-calendly-desc-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 13.5px;
          color: #475569;
          line-height: 1.5;
          margin-top: 10px;
        }
        .nd-calendly-desc-section strong {
          color: #0f172a;
        }
        .nd-calendly-desc-note {
          font-style: italic;
          font-size: 12.5px;
          color: #64748b;
          margin-top: 4px;
        }
        .nd-calendly-left-bottom {
          display: flex;
          gap: 16px;
          font-size: 12.5px;
          color: #006bff;
          font-weight: 600;
          margin-top: 40px;
        }
        .nd-calendly-left-bottom a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s;
        }
        .nd-calendly-left-bottom a:hover {
          color: #004fb0;
        }

        /* Right Column */
        .nd-calendly-right {
          flex: 1;
          padding: 36px 40px;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @media (max-width: 900px) {
          .nd-calendly-right {
            padding: 30px 24px;
          }
        }
        .nd-calendly-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #475569;
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 5px 30px;
          transform: rotate(45deg) translate(28px, -12px);
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          pointer-events: none;
          width: 140px;
          text-align: center;
          letter-spacing: 0.5px;
        }
        .nd-calendly-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 24px 0;
          text-align: left;
        }

        /* Calendar Grid and Time slots */
        .nd-calendly-step1-body {
          display: flex;
          gap: 30px;
          flex: 1;
        }
        @media (max-width: 600px) {
          .nd-calendly-step1-body {
            flex-direction: column;
          }
        }
        .nd-calendly-calendar-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nd-calendly-cal-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          font-size: 15px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
        }
        .nd-calendly-cal-arrow {
          background: none;
          border: none;
          color: #006bff;
          cursor: pointer;
          padding: 4px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s;
        }
        .nd-calendly-cal-arrow:hover {
          background-color: #f1f5f9;
        }
        .nd-calendly-grid-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }
        .nd-calendly-grid-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }
        .nd-calendly-day-btn {
          aspect-ratio: 1;
          border: none;
          background: none;
          border-radius: 50%;
          font-size: 13.5px;
          font-weight: 700;
          color: #006bff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.2s;
        }
        .nd-calendly-day-btn:hover {
          background-color: #eff6ff;
        }
        .nd-calendly-day-btn.empty {
          cursor: default;
          pointer-events: none;
        }
        .nd-calendly-day-btn.selected {
          background-color: #006bff !important;
          color: #ffffff !important;
        }
        .nd-calendly-day-dot {
          width: 4px;
          height: 4px;
          background-color: #006bff;
          border-radius: 50%;
          position: absolute;
          bottom: 3px;
        }
        .nd-calendly-day-btn.selected .nd-calendly-day-dot {
          background-color: #ffffff;
        }

        /* Slots Panel */
        .nd-calendly-slots-area {
          width: 220px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 8px;
          animation: slideInSlots 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (max-width: 600px) {
          .nd-calendly-slots-area {
            width: 100%;
            max-height: 250px;
          }
        }
        @keyframes slideInSlots {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .nd-calendly-slot-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nd-calendly-slot-btn {
          width: 100%;
          padding: 12px;
          border: 1px solid rgba(0, 107, 255, 0.5);
          background: transparent;
          color: #006bff;
          font-size: 14px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nd-calendly-slot-btn:hover {
          border-color: #006bff;
          background-color: #eff6ff;
          border-width: 1.5px;
        }
        .nd-calendly-slot-select-row {
          display: flex;
          gap: 8px;
          width: 100%;
        }
        .nd-calendly-slot-select-time {
          flex: 1;
          padding: 12px;
          background: #64748b;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          border-radius: 6px;
          text-align: center;
          border: none;
        }
        .nd-calendly-slot-select-next {
          flex: 1;
          padding: 12px;
          background-color: #006bff;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .nd-calendly-slot-select-next:hover {
          background-color: #0056cb;
        }
        
        .nd-calendly-tz-footer {
          margin-top: 30px;
          text-align: left;
          font-size: 12.5px;
          color: #475569;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Details Form */
        .nd-calendly-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
          width: 100%;
        }
        .nd-calendly-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .nd-calendly-form-group label {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }
        .nd-calendly-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
          outline: none;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        .nd-calendly-input:focus {
          border-color: #006bff;
        }
        .nd-calendly-phone-wrapper {
          display: flex;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
        }
        .nd-calendly-phone-prefix {
          background-color: #f1f5f9;
          border-right: 1px solid #cbd5e1;
          padding: 0 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
        }
        .nd-calendly-phone-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px 12px;
          font-size: 14px;
          font-family: inherit;
        }
        .nd-calendly-guest-btn {
          background: none;
          border: 1px solid #006bff;
          color: #006bff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          width: fit-content;
          transition: all 0.2s;
        }
        .nd-calendly-guest-btn:hover {
          background-color: #eff6ff;
        }
        .nd-calendly-terms {
          font-size: 11.5px;
          color: #64748b;
          line-height: 1.5;
          margin-top: 6px;
        }
        .nd-calendly-submit-btn {
          background-color: #006bff;
          color: #ffffff;
          border: none;
          border-radius: 40px;
          padding: 12px 24px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          width: fit-content;
          transition: background-color 0.2s;
          margin-top: 10px;
        }
        .nd-calendly-submit-btn:hover {
          background-color: #0056cb;
        }
        .nd-calendly-submit-note {
          font-size: 11px;
          color: #64748b;
          margin-top: -8px;
        }

        /* Step 3 Success */
        .nd-calendly-success {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 60px 20px;
          text-align: center;
        }
        .nd-calendly-success h2 {
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }
        .nd-calendly-success p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
          max-width: 480px;
          margin: 0;
          font-weight: 500;
        }
        .nd-calendly-success-btn {
          background-color: #2E29FF;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.2s;
          border: none;
          cursor: pointer;
          display: inline-block;
          margin-top: 10px;
        }
        .nd-calendly-success-btn:hover {
          background-color: #1a16dd;
          color: #ffffff;
        }

        /* Responsive Overrides */
        @media (max-width: 600px) {
          .nd-contact-title {
            font-size: 26px !important;
            line-height: 1.3 !important;
          }
          .nd-contact-page {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          .nd-calendly-left {
            padding: 24px 20px !important;
          }
          .nd-calendly-right {
            padding: 24px 20px !important;
          }
          .nd-calendly-day-btn {
            font-size: 13px !important;
          }
          .nd-calendly-grid-header {
            font-size: 10px !important;
            gap: 2px !important;
          }
          .nd-calendly-grid-days {
            gap: 4px !important;
          }
        }
        @media (max-width: 400px) {
          .nd-calendly-left, .nd-calendly-right {
            padding: 20px 16px !important;
          }
          .nd-calendly-grid-days {
            gap: 2px !important;
          }
          .nd-calendly-day-btn {
            font-size: 12px !important;
          }
          .nd-calendly-day-dot {
            bottom: 2px !important;
            width: 3px !important;
            height: 3px !important;
          }
        }
      `}</style>

      <div className="nd-contact-header">
        <h1 className="nd-contact-title">
          Consult with Our Experts to <span className="blue-text">Simplify</span> <span className="purple-text">Growth</span> with Tailored Solutions
        </h1>
      </div>

      <div className="nd-calendly-card">
        {/* Powered by Calendly Ribbon */}
        {step !== 'success' && <div className="nd-calendly-badge">powered by<br /><b>Calendly</b></div>}

        {/* LEFT COLUMN */}
        {step !== 'success' && (
          <div className="nd-calendly-left">
            <div className="nd-calendly-left-top">
              {step === 'details' && (
                <button className="nd-calendly-left-back" onClick={handleBack}>
                  <IconBackArrow /> Back
                </button>
              )}
              <h3 className="nd-calendly-brand">EngineerBabu</h3>
              
              <div className="nd-calendly-duration">
                <IconClock /> 45 min
              </div>
              
              <div className="nd-calendly-location">
                <span style={{ marginTop: '2px', display: 'inline-block' }}><IconVideo /></span>
                <span>Web conferencing details provided upon confirmation.</span>
              </div>

              {step === 'details' && confirmedSlot && (
                <div className="nd-calendly-location" style={{ color: '#006bff', fontWeight: '700' }}>
                  <span style={{ marginTop: '2px', display: 'inline-block' }}><IconCalendar /></span>
                  <span>
                    {confirmedSlot.time} - {confirmedSlot.time === '11:00am' ? '11:45am' : '8:45am'}, {getFormattedDateString(confirmedSlot.date)}
                  </span>
                </div>
              )}

              {step === 'details' && (
                <div className="nd-calendly-location">
                  <span style={{ marginTop: '2px', display: 'inline-block' }}><IconGlobe /></span>
                  <span>India Standard Time</span>
                </div>
              )}

              <div className="nd-calendly-desc-section">
                <p><strong>Book a call if you're looking to build an App, Website, or AI solution.</strong></p>
                <p>Trusted by Y Combinator startups & global enterprises.</p>
                <p>250+ products delivered worldwide.</p>
                <p className="nd-calendly-desc-note">Note: This is only for clients, not developers.</p>
              </div>
            </div>

            <div className="nd-calendly-left-bottom">
              <a href="#cookie" onClick={(e) => e.preventDefault()}>Cookie settings</a>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            </div>
          </div>
        )}

        {/* RIGHT COLUMN */}
        <div className="nd-calendly-right">
          {step === 'dateTime' && (
            <>
              <h4 className="nd-calendly-title">Select a Date & Time</h4>
              
              <div className="nd-calendly-step1-body">
                {/* Calendar Area */}
                <div className="nd-calendly-calendar-area">
                  <div className="nd-calendly-cal-header">
                    <button className="nd-calendly-cal-arrow">&lt;</button>
                    <span>July 2026</span>
                    <button className="nd-calendly-cal-arrow">&gt;</button>
                  </div>
                  
                  <div className="nd-calendly-grid-header">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                  
                  <div className="nd-calendly-grid-days">
                    {calendarDays.map((day, idx) => {
                      if (day === null) {
                        return <div key={`empty-${idx}`} className="nd-calendly-day-btn empty" />;
                      }
                      
                      const isSelected = selectedDate === day;
                      const hasDot = availableDays.includes(day);
                      
                      return (
                        <button
                          key={`day-${day}`}
                          className={`nd-calendly-day-btn ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleDateSelect(day)}
                        >
                          {day}
                          {hasDot && <span className="nd-calendly-day-dot" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Slots Area (Appears on selecting a date) */}
                {selectedDate && (
                  <div className="nd-calendly-slots-area">
                    <p style={{ margin: '0 0 10px 0', fontSize: '13.5px', fontWeight: '700', color: '#475569', textAlign: 'left' }}>
                      {getFormattedDateString(selectedDate)}
                    </p>
                    
                    {timeSlots.map((slot) => {
                      const isSlotSelected = selectedSlot === slot;
                      
                      return (
                        <div key={slot} className="nd-calendly-slot-wrapper">
                          {isSlotSelected ? (
                            <div className="nd-calendly-slot-select-row">
                              <div className="nd-calendly-slot-select-time">
                                {slot}
                              </div>
                              <button className="nd-calendly-slot-select-next" onClick={handleNextStep}>
                                Next
                              </button>
                            </div>
                          ) : (
                            <button className="nd-calendly-slot-btn" onClick={() => setSelectedSlot(slot)}>
                              {slot}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="nd-calendly-tz-footer">
                <IconGlobe />
                <span>India Standard Time (3:44am) ▾</span>
              </div>
            </>
          )}

          {step === 'details' && (
            <>
              <h4 className="nd-calendly-title">Enter Details</h4>
              
              <form onSubmit={handleSubmit} className="nd-calendly-form">
                <div className="nd-calendly-form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    required
                    className="nd-calendly-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="nd-calendly-form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    required
                    className="nd-calendly-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {!showGuests ? (
                  <button type="button" className="nd-calendly-guest-btn" onClick={() => setShowGuests(true)}>
                    Add guests
                  </button>
                ) : (
                  <div className="nd-calendly-form-group">
                    <label>Guest Email</label>
                    <input
                      type="email"
                      className="nd-calendly-input"
                      value={formData.guestEmail}
                      onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                      placeholder="guest@example.com"
                    />
                  </div>
                )}

                <div className="nd-calendly-form-group">
                  <label>What's your project or requirement? *</label>
                  <textarea
                    rows="4"
                    required
                    className="nd-calendly-input"
                    style={{ resize: 'none' }}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  />
                </div>

                <div className="nd-calendly-form-group">
                  <label>Phone No. *</label>
                  <div className="nd-calendly-phone-wrapper">
                    <div className="nd-calendly-phone-prefix">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      className="nd-calendly-phone-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <p className="nd-calendly-terms">
                  By proceeding, you confirm that you have read and agree to <a href="#calendly" onClick={(e) => e.preventDefault()}>Calendly's Participant Terms</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Notice</a>.
                </p>

                <button type="submit" className="nd-calendly-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Scheduling..." : "Schedule Event"}
                </button>
                
                <p className="nd-calendly-submit-note">
                  You will be redirected to an external site.
                </p>
              </form>
            </>
          )}

          {step === 'success' && (
            <div className="nd-calendly-success">
              <div className="nd-calendly-success-icon">
                <IconPopper />
              </div>
              <h2>Thank you for your inquiry.</h2>
              <p>
                We're here to help with any questions or concerns you may have. Our experts will connect with you shortly.
              </p>
              <Link to="/" className="nd-calendly-success-btn">
                Back to Homepage ↗
              </Link>
            </div>
          )}
      </div>
    </div>
  </div>
  </>
  );
}
