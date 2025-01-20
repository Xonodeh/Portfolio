// Données des projets
const projects = [
    {
        title: "Site web MarieTeam",
        description: "Projet scolaire de création pour gérer des liaisons maritimes",
        image: "https://via.placeholder.com/300x200",
        technologies: ["HTML ", "CSS ", "JavaScript ", " PHP ", " MySQL"],
        link: "#"
    },
    {
        title: "Projet 2",
        description: "Description du projet 2",
        image: "https://via.placeholder.com/300x200",
        technologies: ["React", "Node.js"],
        link: "#"
    },
    {
        title: "Projet 3",
        description: "Description du projet 3",
        image: "https://via.placeholder.com/300x200",
        technologies: ["Vue.js", "Firebase"],
        link: "#"
    }
];

// Fonction pour créer les cartes de projets
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card scale-in';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank">Voir le projet</a>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation des éléments au scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form submitted:', formData);
    // Ici vous pourriez ajouter une vraie logique d'envoi de formulaire
    
    alert('Message envoyé !');
    this.reset();
});

// Menu burger pour mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    handleScrollAnimations();
});