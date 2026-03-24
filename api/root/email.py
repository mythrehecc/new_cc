import smtplib
import base64
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from root.config import EMAIL_PASSWORD, EMAIL_SENDER, SMTP_PORT, SMTP_SERVER

SENDER_EMAIL = EMAIL_SENDER
SENDER_PASSWORD = EMAIL_PASSWORD


def send_wishlist_welcome_email(recipient_email, first_name=None):
    """
    Send a welcome email to users who joined the Dockly wishlist

    Args:
        recipient_email (str): The recipient's email address
        first_name (str): The recipient's first name (optional)
    """

    if not first_name:
        username = recipient_email.split("@")[0]
        first_name = username.capitalize()

    try:
        # Create message
        msg = MIMEMultipart("related")
        msg["From"] = SENDER_EMAIL
        msg["To"] = recipient_email
        msg["Subject"] = "🎉 You're officially on the Dockly Waitlist!"

        # Create HTML email content
        html_content = f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Dockly Waitlist</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                body {{
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: #f8fafc;
                    line-height: 1.6;
                }}
                
                .email-container {{
                    max-width: 1200px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    position: relative;
                }}
                
                .header {{
                   background: rgb(99, 102, 241);
                    padding: 40px 30px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }}
                
                .header::before {{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url('cid:logo');
                    background-size: 100px 100px;
                    background-repeat: no-repeat;
                    background-position: center;
                    opacity: 0.1;
                    z-index: 1;
                }}
                
                .logo {{
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }}
                
                .logo img {{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }}
                
                .header h1 {{
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0;
                    position: relative;
                    z-index: 2;
                }}
                
                .content {{
                    padding: 40px 30px;
                }}
                
                .greeting {{
                    font-size: 18px;
                    color: #1e293b;
                    margin-bottom: 30px;
                    font-weight: 500;
                }}
                
                .main-message {{
                    font-size: 16px;
                    color: #475569;
                    margin-bottom: 30px;
                    line-height: 1.7;
                }}
                
                .benefits {{
                    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                    border-radius: 12px;
                    padding: 25px;
                    margin: 30px 0;
                }}
                
                .benefits h3 {{
                    color: #1e293b;
                    font-size: 18px;
                    margin-bottom: 20px;
                    font-weight: 600;
                }}
                
                .benefit-item {{
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                    font-size: 15px;
                    color: #475569;
                }}
                
                .benefit-item:last-child {{
                    margin-bottom: 0;
                }}
                
                .checkmark {{
                    color: #10b981;
                    font-weight: bold;
                    margin-right: 12px;
                    font-size: 16px;
                }}
                
                .next-steps {{
                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                    border-radius: 12px;
                    padding: 25px;
                    margin: 30px 0;
                    border-left: 4px solid #f59e0b;
                }}
                
                .next-steps h3 {{
                    color: #92400e;
                    font-size: 16px;
                    margin-bottom: 10px;
                    font-weight: 600;
                }}
                
                .next-steps p {{
                    color: #92400e;
                    margin: 0;
                    font-size: 15px;
                }}
                
                .closing {{
                    font-size: 16px;
                    color: #475569;
                    margin: 30px 0 20px;
                    line-height: 1.7;
                }}
                
                .signature {{
                    font-size: 16px;
                    color: #1e293b;
                    font-weight: 500;
                    margin-bottom: 5px;
                }}
                
                .team-name {{
                    color: #6366F1;
                    font-weight: 600;
                }}
                
                .footer {{
                    background-color: #f1f5f9;
                    padding: 25px 30px;
                    text-align: center;
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.5;
                }}
                
                .footer a {{
                    color: #667eea;
                    text-decoration: none;
                }}
                
                .emoji {{
                    font-size: 1.2em;
                }}
                
                @media (max-width: 600px) {{
                    .email-container {{
                        margin: 10px;
                        border-radius: 12px;
                    }}
                    
                    .content, .header {{
                        padding: 30px 20px;
                    }}
                    
                    .header h1 {{
                        font-size: 24px;
                    }}
                }}
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="logo">
                        <img src="cid:logo" alt="Dockly Logo">
                    </div>
                    <h1>Welcome to Dockly!</h1>
                </div>
                
                <div class="content">
                    <div class="greeting">
                        Hi {first_name}!
                    </div>
                    
                    <div class="main-message">
                        Thanks for joining the Dockly Waitlist! <span class="emoji">🎉</span>
                        <br><br>
                        You're now officially part of our early community, and we couldn't be more excited to have you on board.
                    </div>
                    
                    <div class="benefits">
                        <h3>By joining, you'll be the first to:</h3>
                        <div class="benefit-item">
                            <span class="checkmark">✅</span>
                            Get early updates about Dockly features
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✅</span>
                            Receive exclusive sneak peeks & behind-the-scenes news
                        </div>
                        <div class="benefit-item">
                            <span class="checkmark">✅</span>
                            Be notified when we launch <span class="emoji">🚀</span>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h3><span class="emoji">📋</span> Next Steps:</h3>
                        <p>Sit tight - we'll be sending exciting updates straight to your inbox soon.</p>
                    </div>
                    
                    <div class="closing">
                        We’re building Dockly to make managing life simpler, smarter, and more connected - and we’re excited to have you on this journey with us. Stay tuned for more updates!
                    </div>
                    
                    <div class="signature">
                        Warm regards,<br>
                        <span class="team-name">The Dockly Team</span> <span class="emoji">💙</span>
                    </div>
                </div>
                
                <div class="footer">
                    <p>
                        You're receiving this email because you signed up for the Dockly Waitlist.<br>
                        If this wasn't you, you can safely ignore this message.
                    </p>
                </div>
            </div>
        </body>
        </html>
        """

        # Create HTML part
        html_part = MIMEText(html_content, "html")
        msg.attach(html_part)

        logo_path = "assets/dockly-logo.png"
        if os.path.exists(logo_path):
            with open(logo_path, "rb") as f:
                img_data = f.read()
                image = MIMEImage(img_data)
                image.add_header("Content-ID", "<logo>")
                image.add_header(
                    "Content-Disposition", "inline", filename="dockly-logo.png"
                )
                msg.attach(image)

        # Connect to server and send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()  # Enable encryption
        server.login(SENDER_EMAIL, SENDER_PASSWORD)

        # Send email
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, recipient_email, text)
        server.quit()

        print(f"Welcome email sent successfully to {recipient_email}")
        return True

    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False


def send_bulk_wishlist_emails(email_list):
    """
    Send welcome emails to multiple recipients

    Args:
        email_list (list): List of dictionaries with 'email' and optional 'first_name' keys
                          Example: [{'email': 'john@example.com', 'first_name': 'John'}]
    """
    success_count = 0
    failed_emails = []

    for recipient in email_list:
        email = recipient.get("email")
        first_name = recipient.get("first_name", "Dockly Explorer")

        if send_wishlist_welcome_email(email, first_name):
            success_count += 1
        else:
            failed_emails.append(email)

    print(f"Successfully sent {success_count} emails")
    if failed_emails:
        print(f"Failed to send to: {failed_emails}")
