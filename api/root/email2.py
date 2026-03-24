# import smtplib
# import os
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from email.mime.image import MIMEImage
# from email.message import EmailMessage


# class DocklyEmailTemplate:
#     """
#     Unified email template system for Dockly
#     Maintains consistent branding and styling across all email communications
#     """

#     from root.config import EMAIL_PASSWORD, EMAIL_SENDER, SMTP_PORT, SMTP_SERVER

#     SENDER_EMAIL = EMAIL_SENDER
#     SENDER_PASSWORD = EMAIL_PASSWORD

#     # Enhanced brand colors and styling
#     PRIMARY_COLOR = "#6366F1"
#     PRIMARY_DARK = "#4f46e5"
#     SECONDARY_COLOR = "#06b6d4"
#     ACCENT_COLOR = "#f59e0b"
#     SUCCESS_COLOR = "#10b981"
#     BACKGROUND_COLOR = "#f1f5f9"
#     CARD_BACKGROUND = "#ffffff"
#     TEXT_PRIMARY = "#0f172a"
#     TEXT_SECONDARY = "#475569"
#     TEXT_MUTED = "#64748b"
#     BORDER_COLOR = "#e2e8f0"

#     @staticmethod
#     def get_base_template():
#         """Returns the enhanced base HTML template with maximum email client compatibility and modern design"""
#         return """
#         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
#         <html xmlns="http://www.w3.org/1999/xhtml">
#         <head>
#             <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
#             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
#             <title>{title}</title>
#             <style type="text/css">
#                 /* Reset styles */
#                 body, table, td, p, a, li, blockquote {{
#                     -webkit-text-size-adjust: 100%;
#                     -ms-text-size-adjust: 100%;
#                     margin: 0;
#                     padding: 0;
#                 }}

#                 table, td {{
#                     mso-table-lspace: 0pt;
#                     mso-table-rspace: 0pt;
#                     border-collapse: collapse;
#                 }}

#                 img {{
#                     -ms-interpolation-mode: bicubic;
#                     border: 0;
#                     outline: none;
#                     text-decoration: none;
#                     display: block;
#                 }}

#                 /* Base styles */
#                 body {{
#                     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
#                     background-color: {background_color};
#                     color: {text_primary};
#                     line-height: 1.4;
#                     margin: 0;
#                     padding: 0;
#                     width: 100% !important;
#                     min-width: 100%;
#                     -webkit-font-smoothing: antialiased;
#                     -moz-osx-font-smoothing: grayscale;
#                 }}

#                 .email-wrapper {{
#                     background: linear-gradient(135deg, {background_color} 0%, #e2e8f0 100%);
#                     padding: 0;
#                     width: 100%;
#                     min-height: 100vh;
#                 }}

#                 .email-container {{
#                     width: 100%;
#                     max-width: 680px;
#                     margin: 0 auto;
#                     background-color: {card_background};
#                     box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04);
#                     border-radius: 0;
#                     overflow: hidden;
#                 }}

#                 .header {{
#                     text-align: center;
#                     padding: 24px 32px 20px;
#                     background: linear-gradient(135deg, {primary_color} 0%, {primary_dark} 100%);
#                     position: relative;
#                 }}

#                 .header::before {{
#                     content: '';
#                     position: absolute;
#                     top: 0;
#                     left: 0;
#                     right: 0;
#                     bottom: 0;
#                     background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></svg>');
#                     opacity: 0.3;
#                 }}

#                 .logo-container {{
#                     position: relative;
#                     z-index: 2;
#                 }}

#                 .logo {{
#                     width: 44px;
#                     height: 44px;
#                     border-radius: 12px;
#                     display: inline-block;
#                     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
#                     background: white;
#                     padding: 3px;
#                 }}

#                 .brand-name {{
#                     font-size: 24px;
#                     font-weight: 800;
#                     color: white;
#                     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
#                     margin: 8px 0 0 0;
#                     text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
#                     letter-spacing: -0.02em;
#                 }}

#                 .brand-tagline {{
#                     font-size: 12px;
#                     color: rgba(255, 255, 255, 0.9);
#                     margin: 4px 0 0 0;
#                     font-weight: 500;
#                 }}

#                 .main-content {{
#                     padding: 28px 32px 24px;
#                     background: {card_background};
#                 }}

#                 .content-title {{
#                     font-size: 22px;
#                     font-weight: 700;
#                     color: {text_primary};
#                     text-align: center;
#                     margin: 0 0 10px 0;
#                     line-height: 1.2;
#                     letter-spacing: -0.02em;
#                 }}

#                 .content-subtitle {{
#                     font-size: 15px;
#                     color: {text_secondary};
#                     text-align: center;
#                     margin: 0 0 20px 0;
#                     line-height: 1.4;
#                     font-weight: 400;
#                 }}

#                 .highlight-box {{
#                     background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
#                     border: 2px solid {border_color};
#                     border-radius: 16px;
#                     padding: 20px 16px;
#                     text-align: center;
#                     margin: 24px 0;
#                     position: relative;
#                     overflow: hidden;
#                 }}

#                 .highlight-box::before {{
#                     content: '';
#                     position: absolute;
#                     top: 0;
#                     left: 0;
#                     right: 0;
#                     height: 3px;
#                     background: linear-gradient(90deg, {primary_color} 0%, {secondary_color} 100%);
#                 }}

#                 .otp-container {{
#                     position: relative;
#                     display: inline-block;
#                     margin: 8px 0;
#                 }}

#                 .otp-code {{
#                     font-size: 32px;
#                     font-weight: 800;
#                     letter-spacing: 4px;
#                     color: {text_primary};
#                     font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
#                     margin: 0;
#                     background: white;
#                     padding: 14px 20px;
#                     border-radius: 10px;
#                     border: 2px solid {border_color};
#                     display: inline-block;
#                     min-width: 200px;
#                     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
#                     user-select: all;
#                     -webkit-user-select: all;
#                     -moz-user-select: all;
#                     -ms-user-select: all;
#                 }}

#                 .info-text {{
#                     font-size: 13px;
#                     color: {text_muted};
#                     text-align: center;
#                     margin: 18px 0;
#                     line-height: 1.5;
#                     padding: 0 12px;
#                 }}

#                 .welcome-hero {{
#                     text-align: center;
#                     margin: 20px 0;
#                     padding: 24px 20px;
#                     background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
#                     border-radius: 16px;
#                     border: 1px solid rgba(99, 102, 241, 0.1);
#                 }}

#                 .welcome-icon {{
#                     font-size: 16px;
#                     margin-bottom: 10px;
#                     display: inline-block;
#                     vertical-align: middle;
#                 }}

#                 .welcome-message {{
#                     font-size: 15px;
#                     color: {text_secondary};
#                     line-height: 1.4;
#                     margin: 0;
#                     font-weight: 500;
#                 }}

#                .benefits-container {{
#                     margin: 24px 0;
#                     background: linear-gradient(135deg, #fefefe 0%, #f9fafb 100%);
#                     border-radius: 16px;
#                     padding: 20px 18px;
#                     border: 1px solid {border_color};
#                 }}

#                 .benefits-title {{
#                     font-size: 17px;
#                     font-weight: 700;
#                     color: {text_primary};
#                     text-align: center;
#                     margin: 0 0 16px 0;
#                 }}

#                 .benefits-list {{
#                     margin: 0;
#                     padding: 0;
#                     list-style: none;
#                 }}

#                 .benefit-item {{
#                     display: flex;
#                     align-items: flex-start;
#                     margin: 0 0 12px 0;
#                     padding: 6px 0;
#                     font-size: 14px;
#                     line-height: 1.4;
#                     color: {text_secondary};
#                     border-bottom: 1px solid rgba(226, 232, 240, 0.5);
#                 }}

#                 .benefit-item:last-child {{
#                     border-bottom: none;
#                     margin-bottom: 0;
#                 }}

#                 .checkmark {{
#                     color: {primary_color};
#                     font-weight: bold;
#                     margin-right: 10px;
#                     font-size: 16px;
#                     line-height: 1.2;
#                     flex-shrink: 0;
#                 }}

#                 .benefit-text {{
#                     flex: 1;
#                     font-weight: 500;
#                 }}
#                 .cta-section {{
#                     background: linear-gradient(135deg, {primary_color} 0%, {primary_dark} 100%);
#                     border-radius: 16px;
#                     padding: 20px 16px;
#                     text-align: center;
#                     margin: 24px 0;
#                     color: white;
#                     position: relative;
#                     overflow: hidden;
#                 }}

#                 .cta-section::before {{
#                     content: '';
#                     position: absolute;
#                     top: 0;
#                     left: 0;
#                     right: 0;
#                     bottom: 0;
#                     background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.08"><circle cx="30" cy="30" r="2"/></g></svg>');
#                     opacity: 0.4;
#                 }}

#                 .cta-content {{
#                     position: relative;
#                     z-index: 2;
#                 }}

#                 .cta-title {{
#                     font-size: 17px;
#                     font-weight: 700;
#                     margin: 0 0 6px 0;
#                     color: white;
#                 }}

#                 .cta-description {{
#                     font-size: 13px;
#                     margin: 0 0 12px 0;
#                     color: rgba(255, 255, 255, 0.9);
#                     line-height: 1.4;
#                 }}

#                 .footer {{
#                     background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
#                     padding: 24px 32px;
#                     text-align: center;
#                     border-top: 1px solid {border_color};
#                 }}

#                 .footer-text {{
#                     font-size: 12px;
#                     color: {text_muted};
#                     line-height: 1.5;
#                     margin: 0 0 12px 0;
#                     padding: 0 12px;
#                 }}

#                 .copyright {{
#                     font-size: 11px;
#                     color: {text_muted};
#                     font-weight: 500;
#                 }}

#                 .warning-text {{
#                     margin: 0;
#                     color: #92400e;
#                     font-size: 13px;
#                     text-align: center;
#                     font-weight: 500;
#                     line-height: 1.4;

#                     display: inline-flex;   /* keeps emoji + text in one line */
#                     align-items: center;
#                     gap: 6px;               /* spacing between emoji & text */
#                 }}

#                 .warning-text .emoji {{
#                     flex-shrink: 0;         /* prevents emoji from shrinking */
#                     font-size: 14px;        /* adjust size if needed */
#                 }}

#                 .signature {{
#                     text-align: center;
#                     margin: 20px 0;
#                     padding: 16px;
#                     background: rgba(99, 102, 241, 0.02);
#                     border-radius: 12px;
#                     border: 1px solid rgba(99, 102, 241, 0.1);
#                 }}

#                 .signature-text {{
#                     color: {text_secondary};
#                     font-size: 14px;
#                     margin: 0 0 8px 0;
#                     line-height: 1.4;
#                 }}

#                 .signature-team {{
#                     color: {text_primary};
#                     font-weight: 700;
#                     margin: 0;
#                     font-size: 14px;
#                     display: inline-block;
#                     vertical-align: middle;
#                 }}

#                 .team-name {{
#                     color: {primary_color};
#                     font-weight: 800;
#                     display: inline-block;
#                     vertical-align: middle;
#                 }}

#                 /* Emoji fix - ensure inline display */
#                 .signature-team br {{
#                     line-height: 1;
#                 }}

#                 .signature-team .team-name {{
#                     display: inline-flex;
#                     align-items: center; /* keeps emoji aligned */
#                     gap: 10px;           /* space between text and emoji */
#                     white-space: nowrap;
#                 }}

#                 /* Mobile responsive */
#                 @media only screen and (max-width: 680px) {{
#                     .email-container {{
#                         margin: 0;
#                         border-radius: 0;
#                         width: 100% !important;
#                     }}

#                     .header, .main-content, .footer {{
#                         padding: 20px 16px;
#                     }}

#                     .content-title {{
#                         font-size: 20px;
#                     }}

#                     .content-subtitle {{
#                         font-size: 14px;
#                     }}

#                     .otp-code {{
#                         font-size: 28px;
#                         letter-spacing: 3px;
#                         min-width: 180px;
#                         padding: 12px 16px;
#                     }}

#                     .logo {{
#                         width: 40px;
#                         height: 40px;
#                     }}

#                     .brand-name {{
#                         font-size: 22px;
#                     }}

#                     .highlight-box, .benefits-container, .cta-section {{
#                         padding: 16px 14px;
#                         margin: 20px 0;
#                     }}

#                     .benefit-item {{
#                         font-size: 13px;
#                     }}

#                     .checkmark {{
#                         font-size: 14px;
#                         margin-right: 8px;
#                     }}
#                 }}

#                 @media only screen and (max-width: 480px) {{
#                     .header, .main-content, .footer {{
#                         padding: 16px 12px;
#                     }}

#                     .content-title {{
#                         font-size: 18px;
#                     }}

#                     .otp-code {{
#                         font-size: 24px;
#                         letter-spacing: 2px;
#                         min-width: 160px;
#                     }}

#                     .welcome-hero {{
#                         padding: 20px 16px;
#                     }}
#                 }}
#             </style>
#         </head>
#         <body>
#             <div class="email-wrapper">
#                 <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
#                     <tr>
#                         <td align="center" style="padding: 0;">
#                             <div class="email-container">
#                                 <div class="header">
#                                     <div class="logo-container">
#                                         <img src="cid:dockly_logo" alt="Dockly Logo" class="logo" width="44" height="44">
#                                         <div class="brand-name">Dockly</div>
#                                     </div>
#                                 </div>

#                                 <div class="main-content">
#                                     {content}
#                                 </div>

#                                 <div class="footer">
#                                     {footer_content}
#                                     <div class="copyright">
#                                         © 2025 Dockly. All rights reserved.
#                                     </div>
#                                 </div>
#                             </div>
#                         </td>
#                     </tr>
#                 </table>
#             </div>
#         </body>
#         </html>
#         """

#     @staticmethod
#     def attach_logo(msg, logo_path="assets/dockly-logo.png"):
#         """
#         Attach logo image to email message

#         Args:
#             msg: Email message object
#             logo_path: Path to logo image file
#         """
#         try:
#             # Check if logo file exists
#             if not os.path.exists(logo_path):
#                 # Try alternative paths
#                 alternative_paths = [
#                     "assets/logo.jpg",
#                     "assets/logo.jpeg",
#                     "assets/dockly_logo.png",
#                     "assets/dockly_logo.jpg",
#                     "static/logo.png",
#                     "static/assets/dockly-logo.png",
#                 ]

#                 logo_found = False
#                 for alt_path in alternative_paths:
#                     if os.path.exists(alt_path):
#                         logo_path = alt_path
#                         logo_found = True
#                         break

#                 if not logo_found:
#                     print(
#                         f"Warning: Logo file not found at {logo_path} or alternative paths"
#                     )
#                     return False

#             # Read and attach the logo
#             with open(logo_path, "rb") as f:
#                 logo_data = f.read()

#             # Create image attachment
#             logo_attachment = MIMEImage(logo_data)
#             logo_attachment.add_header(
#                 "Content-ID", "<dockly_logo>"
#             )  # Fixed: matches cid:dockly_logo
#             logo_attachment.add_header(
#                 "Content-Disposition", "inline", filename="dockly_logo"
#             )

#             # Attach to message
#             msg.attach(logo_attachment)
#             print(f"Logo attached successfully from {logo_path}")
#             return True

#         except Exception as e:
#             print(f"Error attaching logo: {str(e)}")
#             return False

#     @classmethod
#     def send_otp_email(cls, recipient_email, otp, logo_path="assets/dockly-logo.png"):
#         """
#         Send OTP verification email with enhanced Dockly branding
#         """
#         try:
#             # Root message
#             msg = MIMEMultipart("related")
#             msg["From"] = cls.SENDER_EMAIL
#             msg["To"] = recipient_email
#             msg["Subject"] = "Your Dockly Verification Code"

#             # Create the alternative container (text + html)
#             alt_part = MIMEMultipart("alternative")
#             msg.attach(alt_part)

#             # Fallback plain-text (for clients that don't support HTML)
#             text_content = f"Your Dockly verification code is: {otp}. This code will expire in 10 minutes."
#             alt_part.attach(MIMEText(text_content, "plain"))

#             # Build HTML content
#             content = f"""
#                 <div class="content-title">Verify Your Account</div>
#                 <div class="content-subtitle">
#                     Enter this verification code to complete your Dockly sign-up process.
#                 </div>

#                 <div class="highlight-box">
#                     <div class="otp-container">
#                         <div class="otp-code">{otp}</div>
#                     </div>
#                     <div style="margin-top: 12px; font-size: 12px; color: {cls.TEXT_MUTED}; font-weight: 500;">
#                         This code expires in 10 minutes
#                     </div>
#                 </div>

#                 <div class="info-text">
#                     <strong>Security Note:</strong> If you didn't request this code, please ignore this email and ensure your account is secure.
#                 </div>

#                 <div class="signature-team">
#                     Warm regards,<br>
#                     <span class="team-name">
#                         <span>The Dockly Team</span>
#                         <span class="heart">💙</span>
#                     </span>
#                 </div>
#             """

#             footer_content = f"""
#                 <div class="footer-text">
#                     You're receiving this email because someone attempted to sign up for Dockly with this email address.<br>
#                     If this wasn't you, you can safely ignore this message.
#                 </div>
#             """

#             html_content = cls.get_base_template().format(
#                 title="Verify Your Dockly Account",
#                 primary_color=cls.PRIMARY_COLOR,
#                 primary_dark=cls.PRIMARY_DARK,
#                 secondary_color=cls.SECONDARY_COLOR,
#                 background_color=cls.BACKGROUND_COLOR,
#                 card_background=cls.CARD_BACKGROUND,
#                 text_primary=cls.TEXT_PRIMARY,
#                 text_secondary=cls.TEXT_SECONDARY,
#                 text_muted=cls.TEXT_MUTED,
#                 border_color=cls.BORDER_COLOR,
#                 content=content,
#                 footer_content=footer_content,
#             )

#             # Attach HTML part
#             alt_part.attach(MIMEText(html_content, "html"))

#             # Attach logo AFTER html part
#             cls.attach_logo(msg, logo_path)

#             # Send
#             server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
#             server.starttls()
#             server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
#             server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
#             server.quit()

#             print(f"OTP email sent successfully to {recipient_email}")
#             return {"otp": otp, "email": recipient_email, "status": 1}

#         except Exception as e:
#             print(f"Error sending OTP email: {str(e)}")
#             return {"otp": None, "email": recipient_email, "error": str(e), "status": 0}

#     @classmethod
#     def send_welcome_email(
#         cls, recipient_email, first_name=None, logo_path="assets/dockly-logo.png"
#     ):
#         """
#         Send enhanced welcome email with modern attractive design
#         """
#         if not first_name:
#             username = recipient_email.split("@")[0]
#             first_name = username.capitalize()

#         try:
#             # Create message root (related for inline images)
#             msg = MIMEMultipart("related")
#             msg["From"] = cls.SENDER_EMAIL
#             msg["To"] = recipient_email
#             msg["Subject"] = f"🎉 Welcome to Dockly, {first_name}! You're in!"

#             # --- Enhanced Content blocks ---
#             content = f"""
#                 <div class="content-title">Welcome to Dockly, {first_name}!</div>
#                 <div class="content-subtitle">
#                     You've successfully joined our exclusive waitlist. Get ready for something amazing!
#                 </div>

#                 <div class="welcome-hero">
#                     <div class="welcome-message">
#                         <span class="welcome-icon">🎊</span><strong>Congratulations!</strong> You're now part of an exclusive community of forward-thinkers
#                         who are about to experience the future of productivity and organization.
#                     </div>
#                 </div>

#                 <div class="benefits-container">
#                     <div class="benefits-title">What You'll Get as an Early Member</div>
#                     <div class="benefits-list">
#                         <div class="benefit-item">
#                             <span class="checkmark">✓</span>
#                             <span class="benefit-text"><strong>Early Access</strong> - Be among the first to experience Dockly when we launch</span>
#                         </div>
#                         <div class="benefit-item">
#                             <span class="checkmark">✓</span>
#                             <span class="benefit-text"><strong>Exclusive Updates</strong> - Get insider news and development updates</span>
#                         </div>
#                         <div class="benefit-item">
#                             <span class="checkmark">✓</span>
#                             <span class="benefit-text"><strong>Special Perks</strong> - Enjoy exclusive features and early-bird pricing</span>
#                         </div>
#                         <div class="benefit-item">
#                             <span class="checkmark">✓</span>
#                             <span class="benefit-text"><strong>Beta Testing</strong> - Help shape Dockly's future with early beta access</span>
#                         </div>
#                         <div class="benefit-item">
#                             <span class="checkmark">✓</span>
#                             <span class="benefit-text"><strong>Community Access</strong> - Connect with like-minded productivity enthusiasts</span>
#                         </div>
#                     </div>
#                 </div>

#                 <div class="cta-section">
#                     <div class="cta-content">
#                         <div class="cta-title">Stay Connected</div>
#                         <div class="cta-description">
#                             Follow our journey and be the first to know about major updates,
#                             feature announcements, and launch details.
#                         </div>
#                     </div>
#                 </div>

#                 <div class="signature">
#                     <div class="signature-text">
#                         We're building something extraordinary, and you're going to be part of it from day one.
#                         Thank you for believing in our vision and joining us on this incredible journey.
#                     </div>
#                     <div class="signature-team">
#                         With excitement and gratitude,<br>
#                         <span class="team-name">The Dockly Team 💙</span>
#                     </div>
#                 </div>
#             """

#             footer_content = f"""
#                 <div class="footer-text">
#                     You're receiving this welcome email because you successfully joined the Dockly Waitlist.<br>
#                     We respect your inbox and will only send you valuable updates about Dockly's development and launch.
#                 </div>
#             """

#             # --- Generate full HTML ---
#             html_content = cls.get_base_template().format(
#                 title="Welcome to Dockly - You're In!",
#                 primary_color=cls.PRIMARY_COLOR,
#                 primary_dark=cls.PRIMARY_DARK,
#                 secondary_color=cls.SECONDARY_COLOR,
#                 background_color=cls.BACKGROUND_COLOR,
#                 card_background=cls.CARD_BACKGROUND,
#                 text_primary=cls.TEXT_PRIMARY,
#                 text_secondary=cls.TEXT_SECONDARY,
#                 text_muted=cls.TEXT_MUTED,
#                 border_color=cls.BORDER_COLOR,
#                 content=content,
#                 footer_content=footer_content,
#             )

#             # --- Alternative part (plain + html) ---
#             alt_part = MIMEMultipart("alternative")

#             # Plain text fallback (for non-HTML clients)
#             plain_text = f"Welcome to Dockly, {first_name}!\n\nThanks for joining the Dockly Waitlist! 🎉\n\nYou're now part of our exclusive early community and will be among the first to experience Dockly when we launch."
#             alt_part.attach(MIMEText(plain_text, "plain"))

#             # Attach HTML version
#             html_part = MIMEText(html_content, "html")
#             alt_part.attach(html_part)

#             # Attach alternative block to root
#             msg.attach(alt_part)

#             # Attach inline logo after HTML is set
#             cls.attach_logo(msg, logo_path)

#             # --- Send email ---
#             server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
#             server.starttls()
#             server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
#             server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
#             server.quit()

#             print(f"Welcome email sent successfully to {recipient_email}")
#             return True

#         except Exception as e:
#             print(f"Error sending welcome email: {str(e)}")
#             return False

#     @classmethod
#     def send_custom_email(
#         cls,
#         recipient_email,
#         subject,
#         title,
#         content,
#         footer_content=None,
#         logo_path="assets/dockly-logo.png",
#     ):
#         """
#         Send custom email using the enhanced Dockly template system

#         Args:
#             recipient_email (str): Recipient's email
#             subject (str): Email subject
#             title (str): Email title/heading
#             content (str): HTML content for the email body
#             footer_content (str): Optional custom footer content
#             logo_path (str): Path to logo image file
#         """
#         try:
#             # Create message
#             msg = MIMEMultipart("related")
#             msg["From"] = cls.SENDER_EMAIL
#             msg["To"] = recipient_email
#             msg["Subject"] = subject

#             # Create alternative part for HTML
#             alt_part = MIMEMultipart("alternative")
#             msg.attach(alt_part)

#             if not footer_content:
#                 footer_content = f"""
#                     <div class="footer-text">
#                         Thank you for being part of the Dockly community!<br>
#                         We're committed to bringing you the best productivity and organization tools.
#                     </div>
#                 """

#             # Generate complete HTML
#             html_content = cls.get_base_template().format(
#                 title=title,
#                 primary_color=cls.PRIMARY_COLOR,
#                 primary_dark=cls.PRIMARY_DARK,
#                 secondary_color=cls.SECONDARY_COLOR,
#                 background_color=cls.BACKGROUND_COLOR,
#                 card_background=cls.CARD_BACKGROUND,
#                 text_primary=cls.TEXT_PRIMARY,
#                 text_secondary=cls.TEXT_SECONDARY,
#                 text_muted=cls.TEXT_MUTED,
#                 border_color=cls.BORDER_COLOR,
#                 content=content,
#                 footer_content=footer_content,
#             )

#             # Create HTML part
#             html_part = MIMEText(html_content, "html")
#             alt_part.attach(html_part)

#             # Attach logo
#             cls.attach_logo(msg, logo_path)

#             # Send email
#             server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
#             server.starttls()
#             server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
#             server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
#             server.quit()

#             print(f"Custom email sent successfully to {recipient_email}")
#             return True

#         except Exception as e:
#             print(f"Error sending custom email: {str(e)}")
#             return False


# # Example usage functions (backward compatibility)
# def send_otp_email(email, otp, logo_path="assets/dockly-logo.png"):
#     """Backward compatible function for OTP emails"""
#     return DocklyEmailTemplate.send_otp_email(email, otp, logo_path)


# def send_wishlist_welcome_email(
#     recipient_email, first_name=None, logo_path="assets/dockly-logo.png"
# ):
#     """Backward compatible function for welcome emails"""
#     return DocklyEmailTemplate.send_welcome_email(
#         recipient_email, first_name, logo_path
#     )


import smtplib
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.message import EmailMessage


class DocklyEmailTemplate:
    """
    🎨 Unified Email Template System for Dockly
    ✨ Maintains consistent branding and styling across all email communications
    """

    # 📧 Email Configuration
    from root.config import EMAIL_PASSWORD, EMAIL_SENDER, SMTP_PORT, SMTP_SERVER

    SENDER_EMAIL = EMAIL_SENDER
    SENDER_PASSWORD = EMAIL_PASSWORD

    # 🎨 Enhanced Brand Colors & Styling
    PRIMARY_COLOR = "#6366F1"
    PRIMARY_DARK = "#4f46e5"
    SECONDARY_COLOR = "#06b6d4"
    ACCENT_COLOR = "#f59e0b"
    SUCCESS_COLOR = "#10b981"
    BACKGROUND_COLOR = "#f1f5f9"
    CARD_BACKGROUND = "#ffffff"
    TEXT_PRIMARY = "#0f172a"
    TEXT_SECONDARY = "#475569"
    TEXT_MUTED = "#64748b"
    BORDER_COLOR = "#e2e8f0"

    @staticmethod
    def get_base_template():
        """🎯 Returns the enhanced base HTML template with maximum email client compatibility"""
        return """<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{title}</title>
    <style type="text/css">
        /* 🔄 Reset Styles */
        body, table, td, p, a, li, blockquote {{ -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; }}
        table, td {{ mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }}
        img {{ -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; display: block; }}
        
        /* 🎨 Base Styles */
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: {background_color}; color: {text_primary}; line-height: 1.4; margin: 0; padding: 0; width: 100% !important; min-width: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }}
        
        .email-wrapper {{ background: linear-gradient(135deg, {background_color} 0%, #e2e8f0 100%); padding: 0; width: 100%; min-height: 100vh; }}
        .email-container {{ width: 100%; max-width: 680px; margin: 0 auto; background-color: {card_background}; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04); border-radius: 0; overflow: hidden; }}
        
        /* 🎯 Header Styles */
        .header {{ text-align: center; padding: 24px 32px 20px; background: linear-gradient(135deg, {primary_color} 0%, {primary_dark} 100%); position: relative; }}
        .header::before {{ content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></svg>'); opacity: 0.3; }}
        .logo-container {{ position: relative; z-index: 2; }}
        .logo {{ width: 44px; height: 44px; border-radius: 12px; display: inline-block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); background: white; padding: 3px; }}
        .brand-name {{ font-size: 24px; font-weight: 800; color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 8px 0 0 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); letter-spacing: -0.02em; }}
        .brand-tagline {{ font-size: 12px; color: rgba(255, 255, 255, 0.9); margin: 4px 0 0 0; font-weight: 500; }}
        
        /* 📝 Content Styles */
        .main-content {{ padding: 28px 32px 24px; background: {card_background}; }}
        .content-title {{ font-size: 22px; font-weight: 700; color: {text_primary}; text-align: center; margin: 0 0 10px 0; line-height: 1.2; letter-spacing: -0.02em; }}
        .content-subtitle {{ font-size: 15px; color: {text_secondary}; text-align: center; margin: 0 0 20px 0; line-height: 1.4; font-weight: 400; }}
        
        /* ✨ Highlight Box */
        .highlight-box {{ background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px solid {border_color}; border-radius: 16px; padding: 20px 16px; text-align: center; margin: 24px 0; position: relative; overflow: hidden; }}
        .highlight-box::before {{ content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, {primary_color} 0%, {secondary_color} 100%); }}
        
        /* 🔢 OTP Styles */
        .otp-container {{ position: relative; display: inline-block; margin: 8px 0; }}
        .otp-code {{ font-size: 32px; font-weight: 800; letter-spacing: 4px; color: {text_primary}; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace; margin: 0; background: white; padding: 14px 20px; border-radius: 10px; border: 2px solid {border_color}; display: inline-block; min-width: 200px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); user-select: all; -webkit-user-select: all; -moz-user-select: all; -ms-user-select: all; }}
        
        /* 📄 Text Styles */
        .info-text {{ font-size: 13px; color: {text_muted}; text-align: center; margin: 18px 0; line-height: 1.5; padding: 0 12px; }}
        .welcome-hero {{ text-align: center; margin: 20px 0; padding: 24px 20px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%); border-radius: 16px; border: 1px solid rgba(99, 102, 241, 0.1); }}
        .welcome-icon {{ font-size: 16px; margin-bottom: 10px; display: inline-block; vertical-align: middle; }}
        .welcome-message {{ font-size: 15px; color: {text_secondary}; line-height: 1.4; margin: 0; font-weight: 500; }}
        
        /* 🎁 Benefits Section */
        .benefits-container {{ margin: 24px 0; background: linear-gradient(135deg, #fefefe 0%, #f9fafb 100%); border-radius: 16px; padding: 20px 18px; border: 1px solid {border_color}; }}
        .benefits-title {{ font-size: 17px; font-weight: 700; color: {text_primary}; text-align: center; margin: 0 0 16px 0; }}
        .benefits-list {{ margin: 0; padding: 0; list-style: none; }}
        .benefit-item {{ display: flex; align-items: flex-start; margin: 0 0 12px 0; padding: 6px 0; font-size: 14px; line-height: 1.4; color: {text_secondary}; border-bottom: 1px solid rgba(226, 232, 240, 0.5); }}
        .benefit-item:last-child {{ border-bottom: none; margin-bottom: 0; }}
        .checkmark {{ color: {primary_color}; font-weight: bold; margin-right: 10px; font-size: 16px; line-height: 1.2; flex-shrink: 0; }}
        .benefit-text {{ flex: 1; font-weight: 500; }}
        
        /* 🚀 CTA Section */
        .cta-section {{ background: linear-gradient(135deg, {primary_color} 0%, {primary_dark} 100%); border-radius: 16px; padding: 20px 16px; text-align: center; margin: 24px 0; color: white; position: relative; overflow: hidden; }}
        .cta-section::before {{ content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.08"><circle cx="30" cy="30" r="2"/></g></svg>'); opacity: 0.4; }}
        .cta-content {{ position: relative; z-index: 2; }}
        .cta-title {{ font-size: 17px; font-weight: 700; margin: 0 0 6px 0; color: white; }}
        .cta-description {{ font-size: 13px; margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.9); line-height: 1.4; }}
        
        /* 🦶 Footer Styles */
        .footer {{ background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 24px 32px; text-align: center; border-top: 1px solid {border_color}; }}
        .footer-text {{ font-size: 12px; color: {text_muted}; line-height: 1.5; margin: 0 0 12px 0; padding: 0 12px; }}
        .copyright {{ font-size: 11px; color: {text_muted}; font-weight: 500; }}
        
        /* ⚠️ Warning Text */
        .warning-text {{ margin: 0; color: #92400e; font-size: 13px; text-align: center; font-weight: 500; line-height: 1.4; display: inline-flex; align-items: center; gap: 6px; }}
        .warning-text .emoji {{ flex-shrink: 0; font-size: 14px; }}
        
        /* ✍️ Signature Styles */
        .signature {{ text-align: center; margin: 20px 0; padding: 16px; background: rgba(99, 102, 241, 0.02); border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.1); }}
        .signature-text {{ color: {text_secondary}; font-size: 14px; margin: 0 0 8px 0; line-height: 1.4; }}
        .signature-team {{ color: {text_primary}; font-weight: 700; margin: 0; font-size: 14px; display: inline-block; vertical-align: middle; }}
        .team-name {{ color: {primary_color}; font-weight: 800; display: inline-flex; align-items: center; gap: 10px; white-space: nowrap; }}
        
        /* 📱 Mobile Responsive */
        @media only screen and (max-width: 680px) {{
            .email-container {{ margin: 0; border-radius: 0; width: 100% !important; }}
            .header, .main-content, .footer {{ padding: 20px 16px; }}
            .content-title {{ font-size: 20px; }}
            .content-subtitle {{ font-size: 14px; }}
            .otp-code {{ font-size: 28px; letter-spacing: 3px; min-width: 180px; padding: 12px 16px; }}
            .logo {{ width: 40px; height: 40px; }}
            .brand-name {{ font-size: 22px; }}
            .highlight-box, .benefits-container, .cta-section {{ padding: 16px 14px; margin: 20px 0; }}
            .benefit-item {{ font-size: 13px; }}
            .checkmark {{ font-size: 14px; margin-right: 8px; }}
        }}
        
        @media only screen and (max-width: 480px) {{
            .header, .main-content, .footer {{ padding: 16px 12px; }}
            .content-title {{ font-size: 18px; }}
            .otp-code {{ font-size: 24px; letter-spacing: 2px; min-width: 160px; }}
            .welcome-hero {{ padding: 20px 16px; }}
        }}
    </style>
</head>
<body>
    <div class="email-wrapper">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td align="center" style="padding: 0;">
                    <div class="email-container">
                        <div class="header">
                            <div class="logo-container">
                                <img src="cid:dockly_logo" alt="Dockly Logo" class="logo" width="44" height="44">
                                <div class="brand-name">Dockly</div>
                            </div>
                        </div>
                        <div class="main-content">{content}</div>
                        <div class="footer">
                            {footer_content}
                            <div class="copyright">© 2025 Dockly. All rights reserved.</div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>"""

    @staticmethod
    def attach_logo(msg, logo_path="assets/dockly-logo.png"):
        """📎 Attach logo image to email message"""
        try:
            if not os.path.exists(logo_path):
                alternative_paths = [
                    "assets/logo.jpg",
                    "assets/logo.jpeg",
                    "assets/dockly_logo.png",
                    "assets/dockly_logo.jpg",
                    "static/logo.png",
                    "static/assets/dockly-logo.png",
                ]

                logo_found = False
                for alt_path in alternative_paths:
                    if os.path.exists(alt_path):
                        logo_path = alt_path
                        logo_found = True
                        break

                if not logo_found:
                    print(
                        f"⚠️ Warning: Logo file not found at {logo_path} or alternative paths"
                    )
                    return False

            with open(logo_path, "rb") as f:
                logo_data = f.read()

            logo_attachment = MIMEImage(logo_data)
            logo_attachment.add_header("Content-ID", "<dockly_logo>")
            logo_attachment.add_header(
                "Content-Disposition", "inline", filename="dockly_logo"
            )
            msg.attach(logo_attachment)

            print(f"✅ Logo attached successfully from {logo_path}")
            return True

        except Exception as e:
            print(f"❌ Error attaching logo: {str(e)}")
            return False

    @classmethod
    def send_otp_email(cls, recipient_email, otp, logo_path="assets/dockly-logo.png"):
        """🔐 Send OTP verification email with enhanced Dockly branding"""
        try:
            msg = MIMEMultipart("related")
            msg["From"] = cls.SENDER_EMAIL
            msg["To"] = recipient_email
            msg["Subject"] = "Your Dockly Verification Code"

            alt_part = MIMEMultipart("alternative")
            msg.attach(alt_part)

            text_content = f"Your Dockly verification code is: {otp}. This code will expire in 10 minutes."
            alt_part.attach(MIMEText(text_content, "plain"))

            content = f"""
                <div class="content-title">Verify Your Account</div>
                <div class="content-subtitle">
                    Enter this verification code to complete your Dockly sign-up process.
                </div>
                
                <div class="highlight-box">
                    <div class="otp-container">
                        <div class="otp-code">{otp}</div>
                    </div>
                    <div style="margin-top: 12px; font-size: 12px; color: {cls.TEXT_MUTED}; font-weight: 500;">
                        This code expires in 10 minutes
                    </div>
                </div>
                
                <div class="info-text">
                    <strong>Security Note:</strong> If you didn't request this code, please ignore this email and ensure your account is secure.
                </div>
                
                <div class="signature-team">
                    Warm regards,<br>
                    <span class="team-name">
                        <span>The Dockly Team</span>
                        <span class="heart">💙</span>
                    </span>
                </div>
            """

            footer_content = """
                <div class="footer-text">
                    You're receiving this email because someone attempted to sign up for Dockly with this email address.<br>
                    If this wasn't you, you can safely ignore this message.
                </div>
            """

            html_content = cls.get_base_template().format(
                title="Verify Your Dockly Account",
                primary_color=cls.PRIMARY_COLOR,
                primary_dark=cls.PRIMARY_DARK,
                secondary_color=cls.SECONDARY_COLOR,
                background_color=cls.BACKGROUND_COLOR,
                card_background=cls.CARD_BACKGROUND,
                text_primary=cls.TEXT_PRIMARY,
                text_secondary=cls.TEXT_SECONDARY,
                text_muted=cls.TEXT_MUTED,
                border_color=cls.BORDER_COLOR,
                content=content,
                footer_content=footer_content,
            )

            alt_part.attach(MIMEText(html_content, "html"))
            cls.attach_logo(msg, logo_path)

            server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
            server.starttls()
            server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
            server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
            server.quit()

            print(f"✅ OTP email sent successfully to {recipient_email}")
            return {"otp": otp, "email": recipient_email, "status": 1}

        except Exception as e:
            print(f"❌ Error sending OTP email: {str(e)}")
            return {"otp": None, "email": recipient_email, "error": str(e), "status": 0}

    @classmethod
    def send_welcome_email(
        cls, recipient_email, first_name=None, logo_path="assets/dockly-logo.png"
    ):
        """🎉 Send enhanced welcome email with modern attractive design"""
        if not first_name:
            username = recipient_email.split("@")[0]
            first_name = username.capitalize()

        try:
            msg = MIMEMultipart("related")
            msg["From"] = cls.SENDER_EMAIL
            msg["To"] = recipient_email
            msg["Subject"] = f"🎉 Welcome to Dockly, {first_name}! You're in!"

            content = f"""
                <div class="content-title">Welcome to Dockly, {first_name}!</div>
                <div class="content-subtitle">
                    You've successfully joined our exclusive waitlist. Get ready for something amazing! 
                </div>
                
                <div class="welcome-hero">
                    <div class="welcome-message">
                        <span class="welcome-icon">🎊</span><strong>Congratulations!</strong> You're now part of an exclusive community of forward-thinkers 
                        who are about to experience the future of productivity and organization.
                    </div>
                </div>
                
                <div class="benefits-container">
                    <div class="benefits-title">What You'll Get as an Early Member</div>
                    <div class="benefits-list">
                        <div class="benefit-item">
                            <span class="checkmark">✓</span>
                            <span class="benefit-text"><strong>Early Access</strong> - Be among the first to experience Dockly when we launch</span>
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✓</span>
                            <span class="benefit-text"><strong>Exclusive Updates</strong> - Get insider news and development updates</span>
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✓</span>
                            <span class="benefit-text"><strong>Special Perks</strong> - Enjoy exclusive features and early-bird pricing</span>
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✓</span>
                            <span class="benefit-text"><strong>Beta Testing</strong> - Help shape Dockly's future with early beta access</span>
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✓</span>
                            <span class="benefit-text"><strong>Community Access</strong> - Connect with like-minded productivity enthusiasts</span>
                        </div>
                    </div>
                </div>
                
                <div class="cta-section">
                    <div class="cta-content">
                        <div class="cta-title">Stay Connected</div>
                        <div class="cta-description">
                            Follow our journey and be the first to know about major updates, 
                            feature announcements, and launch details.
                        </div>
                    </div>
                </div>
                
                <div class="signature">
                    <div class="signature-text">
                        We're building something extraordinary, and you're going to be part of it from day one. 
                        Thank you for believing in our vision and joining us on this incredible journey.
                    </div>
                    <div class="signature-team">
                        With excitement and gratitude,<br>
                        <span class="team-name">The Dockly Team 💙</span> 
                    </div>
                </div>
            """

            footer_content = """
                <div class="footer-text">
                    You're receiving this welcome email because you successfully joined the Dockly Waitlist.<br>
                    We respect your inbox and will only send you valuable updates about Dockly's development and launch.
                </div>
            """

            html_content = cls.get_base_template().format(
                title="Welcome to Dockly - You're In!",
                primary_color=cls.PRIMARY_COLOR,
                primary_dark=cls.PRIMARY_DARK,
                secondary_color=cls.SECONDARY_COLOR,
                background_color=cls.BACKGROUND_COLOR,
                card_background=cls.CARD_BACKGROUND,
                text_primary=cls.TEXT_PRIMARY,
                text_secondary=cls.TEXT_SECONDARY,
                text_muted=cls.TEXT_MUTED,
                border_color=cls.BORDER_COLOR,
                content=content,
                footer_content=footer_content,
            )

            alt_part = MIMEMultipart("alternative")
            plain_text = f"Welcome to Dockly, {first_name}!\n\nThanks for joining the Dockly Waitlist! 🎉\n\nYou're now part of our exclusive early community and will be among the first to experience Dockly when we launch."
            alt_part.attach(MIMEText(plain_text, "plain"))
            alt_part.attach(MIMEText(html_content, "html"))
            msg.attach(alt_part)
            cls.attach_logo(msg, logo_path)

            server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
            server.starttls()
            server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
            server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
            server.quit()

            print(f"✅ Welcome email sent successfully to {recipient_email}")
            return True

        except Exception as e:
            print(f"❌ Error sending welcome email: {str(e)}")
            return False

    @classmethod
    def send_custom_email(
        cls,
        recipient_email,
        subject,
        title,
        content,
        footer_content=None,
        logo_path="assets/dockly-logo.png",
    ):
        """📧 Send custom email using the enhanced Dockly template system"""
        try:
            msg = MIMEMultipart("related")
            msg["From"] = cls.SENDER_EMAIL
            msg["To"] = recipient_email
            msg["Subject"] = subject

            alt_part = MIMEMultipart("alternative")
            msg.attach(alt_part)

            if not footer_content:
                footer_content = """
                    <div class="footer-text">
                        Thank you for being part of the Dockly community!<br>
                        We're committed to bringing you the best productivity and organization tools.
                    </div>
                """

            html_content = cls.get_base_template().format(
                title=title,
                primary_color=cls.PRIMARY_COLOR,
                primary_dark=cls.PRIMARY_DARK,
                secondary_color=cls.SECONDARY_COLOR,
                background_color=cls.BACKGROUND_COLOR,
                card_background=cls.CARD_BACKGROUND,
                text_primary=cls.TEXT_PRIMARY,
                text_secondary=cls.TEXT_SECONDARY,
                text_muted=cls.TEXT_MUTED,
                border_color=cls.BORDER_COLOR,
                content=content,
                footer_content=footer_content,
            )

            alt_part.attach(MIMEText(html_content, "html"))
            cls.attach_logo(msg, logo_path)

            server = smtplib.SMTP(cls.SMTP_SERVER, cls.SMTP_PORT)
            server.starttls()
            server.login(cls.SENDER_EMAIL, cls.SENDER_PASSWORD)
            server.sendmail(cls.SENDER_EMAIL, recipient_email, msg.as_string())
            server.quit()

            print(f"✅ Custom email sent successfully to {recipient_email}")
            return True

        except Exception as e:
            print(f"❌ Error sending custom email: {str(e)}")
            return False


# 🔄 Backward Compatibility Functions
def send_otp_email(email, otp, logo_path="assets/dockly-logo.png"):
    """🔐 Backward compatible function for OTP emails"""
    return DocklyEmailTemplate.send_otp_email(email, otp, logo_path)


def send_wishlist_welcome_email(
    recipient_email, first_name=None, logo_path="assets/dockly-logo.png"
):
    """🎉 Backward compatible function for welcome emails"""
    return DocklyEmailTemplate.send_welcome_email(
        recipient_email, first_name, logo_path
    )
