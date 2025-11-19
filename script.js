// ==========================================
// Crescendo Initiative - Connecting Through Music
// JavaScript Functionality
// ==========================================

AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Animated Counter for Hero Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

document.addEventListener('DOMContentLoaded', () => {
    // Animate hero stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                const targets = [32, 4, 3]; // Musicians, Concerts, Venues
                
                statNumbers.forEach((stat, index) => {
                    const target = targets[index] || 0;
                    if (target > 0) {
                        animateCounter(stat, target);
                    }
                });
                
                observer.unobserve(entry.target);
            }
        });
    });
    
    const hero = document.querySelector('.hero');
    if (hero) {
        observer.observe(hero);
    }
    
    // Initialize Calendar
    initializeCalendar();
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Calendar Initialization with Detailed Events
function initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listMonth'
        },
        themeSystem: 'standard',
        height: 'auto',
        events: [
            {
                title: 'Crescendo Concert - Sunrise Johns Creek',
                start: '2025-09-06T15:30:00',
                end: '2025-09-06T16:15:00',
                extendedProps: {
                    venue: 'Sunrise of Johns Creek',
                    musicians: 7,
                    songs: 'Classical & Contemporary',
                    description: 'Debut performance featuring beautiful classical pieces'
                }
            },
            {
                title: 'Crescendo Concert - Oaks Shiloh Point',
                start: '2025-10-05T13:00:00',
                end: '2025-10-05T13:45:00',
                extendedProps: {
                    venue: 'The Oaks at Shiloh Point',
                    musicians: 6,
                    songs: 8,
                    description: 'Autumn concert with seasonal favorites'
                }
            },
            {
                title: 'Crescendo Concert - Towne Club Windermere',
                start: '2025-10-11T12:00:00',
                end: '2025-10-11T13:00:00',
                extendedProps: {
                    venue: 'Towne Club Windermere',
                    musicians: 2,
                    songs: 'Special Selection',
                    description: 'Intimate performance for residents'
                }
            },
            {
                title: 'Crescendo Concert - Sunrise Johns Creek',
                start: '2025-10-26T13:30:00',
                end: '2025-10-26T14:15:00',
                extendedProps: {
                    venue: 'Sunrise of Johns Creek',
                    musicians: 4,
                    songs: 4,
                    description: 'Return engagement with new repertoire'
                }
            },
            {
                title: 'Crescendo Concert - Sunrise Johns Creek',
                start: '2025-11-22T13:30:00',
                end: '2025-11-22T14:15:00',
                extendedProps: {
                    venue: 'Sunrise of Johns Creek',
                    musicians: 10,
                    songs: 9,
                    description: 'Upcoming performance with expanded ensemble'
                }
            }
        ],
        eventColor: '#2E5BBA',
        eventTextColor: '#ffffff',
        eventClick: function(info) {
            const props = info.event.extendedProps;
            const details = `
                Event: ${info.event.title}
                Date: ${info.event.start.toLocaleDateString()}
                Time: ${info.event.start.toLocaleTimeString()} - ${info.event.end.toLocaleTimeString()}
                Venue: ${props.venue}
                Musicians: ${props.musicians}
                ${props.songs ? `Songs: ${props.songs}` : ''}
                
                ${props.description}
            `;
            alert(details);
        }
    });

    calendar.render();
}

// Video Gallery Enhancement
document.querySelectorAll('.performance-video').forEach(video => {
    video.addEventListener('loadedmetadata', function() {
        this.style.opacity = '1';
    });
    
    video.addEventListener('play', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    video.addEventListener('pause', function() {
        this.style.transform = 'scale(1)';
    });
});
