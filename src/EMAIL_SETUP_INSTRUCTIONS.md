# Email Form Setup Instructions for Cyberminars Digital

The contact form is configured to automatically send emails to **digital@cyberminars.com** when users submit the form.

## Setup Required: EmailJS Service

To enable automatic email sending, you need to set up a free EmailJS account:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account or use EmailJS's default service
5. Note down your **Service ID** (e.g., `service_cyberminars`)

### Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set Template ID as: `template_contact`
4. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

New contact form submission from Cyberminars Digital website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from the Cyberminars Digital contact form.
Reply-To: {{reply_to}}
```

5. Save the template

### Step 4: Get Your Public Key
1. Go to "Account" section
2. Find your **Public Key** (previously called User ID)
3. Copy this key

### Step 5: Update the Code
Open `/components/Contact.tsx` and replace:
```javascript
user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // Line 52
```

With your actual public key:
```javascript
user_id: 'your_actual_public_key_here',
```

Also update the service_id and template_id if you used different names:
```javascript
service_id: 'service_cyberminars', // Your service ID
template_id: 'template_contact',   // Your template ID
```

### Step 6: Configure Email Destination
The form is already configured to send to `digital@cyberminars.com`. If you need to change this, update line 33 in `/components/Contact.tsx`:
```javascript
to_email: 'digital@cyberminars.com',
```

## Alternative: Use Web3Forms (Easier Setup)

If you prefer a simpler solution without account setup, you can use Web3Forms:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email (digital@cyberminars.com) to get an access key
3. Update the Contact.tsx file to use Web3Forms instead

### Web3Forms Implementation:

Replace the `handleSubmit` function in `/components/Contact.tsx` with:

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  setError('');
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'Not provided');
    formDataToSend.append('company', formData.company || 'Not provided');
    formDataToSend.append('service', formData.service);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', `New Contact Form Submission from ${formData.name}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      setSubmitted(true);
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      }, 4000);
    } else {
      throw new Error('Failed to send email');
    }
  } catch (err) {
    console.error('Error sending email:', err);
    setError('Failed to send message. Please try emailing us directly at digital@cyberminars.com');
    setSubmitting(false);
    setTimeout(() => setError(''), 5000);
  }
};
```

## Features Implemented

✅ **Automatic email sending** - No user email client required
✅ **Form validation** - All required fields validated
✅ **Loading state** - Shows "Sending..." while processing
✅ **Success message** - Confirms submission with checkmark
✅ **Error handling** - Displays error with fallback to direct email
✅ **Auto-reset** - Form clears after successful submission
✅ **Professional formatting** - Emails include all form data organized

## Testing

After setup, test the form by:
1. Fill out all required fields
2. Click "Send Message"
3. Check if email arrives at digital@cyberminars.com
4. Verify all form data is included in the email

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Web3Forms Documentation: https://docs.web3forms.com/
- For issues, check browser console for error messages
