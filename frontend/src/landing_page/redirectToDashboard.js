// Central place to handle dashboard redirection
// Later you can add auth logic here without changing other files

export const redirectToDashboard = () => {
    // Replace this with your actual deployed dashboard URL
    const DASHBOARD_URL = "https://your-dashboard.netlify.app";

    // Redirect to dashboard
    window.location.href = DASHBOARD_URL;
};
