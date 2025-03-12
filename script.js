document.addEventListener('DOMContentLoaded', () => {
    const splash1 = document.getElementById('splash1');
    const splash2 = document.getElementById('splash2');
    const onboarding = document.getElementById('onboarding');

    // First splash screen hover interaction
    splash1.addEventListener('mouseenter', () => {
        splash1.classList.remove('active');
        splash2.classList.add('active');
        
        // After delay, show onboarding screen
        setTimeout(() => {
            splash2.classList.remove('active');
            onboarding.classList.add('active');
        }, 2000); // 2 second delay
    });

    // Handle Get Started button click
    document.querySelector('.get-started-btn').addEventListener('click', () => {
        showSignInScreen();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone-number');
    const keys = document.querySelectorAll('.key');
    let phoneNumber = '';

    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (key.classList.contains('backspace')) {
                phoneNumber = phoneNumber.slice(0, -1);
            } else if (!key.classList.contains('special')) {
                if (phoneNumber.length < 10) {
                    phoneNumber += key.textContent.charAt(0);
                }
            }
            phoneInput.value = phoneNumber;
        });
    });

    // Handle back button
    document.querySelector('.back-button').addEventListener('click', () => {
        document.getElementById('number-input').classList.remove('active');
        document.getElementById('sign-in').classList.add('active');
    });

    // Handle next button
    document.querySelector('.next-button').addEventListener('click', () => {
        if (phoneNumber.length === 10) {
            // Add your navigation logic here
            console.log('Phone number submitted:', phoneNumber);
        }
    });
});

function showSignInScreen() {
    document.getElementById('onboarding').classList.remove('active');
    document.getElementById('sign-in').classList.add('active');
}