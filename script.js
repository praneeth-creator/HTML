// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// Modal Functionality
const modal = document.getElementById('topicModal');
const modalContent = modal?.querySelector('.modal-body');
const closeModal = modal?.querySelector('.close-modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

const topicContent = {
  anxiety: {
    title: 'Understanding Anxiety',
    content: `
      <h3>What is Anxiety?</h3>
      <p>Anxiety is your body's natural response to stress. It's a feeling of fear or worry about what's to come. Everyone experiences anxiety at times, but for some people, these feelings can be overwhelming.</p>
      
      <h4>Common Symptoms:</h4>
      <ul>
        <li>Rapid heartbeat</li>
        <li>Fast breathing</li>
        <li>Restlessness</li>
        <li>Trouble concentrating</li>
        <li>Difficulty sleeping</li>
      </ul>

      <h4>Coping Strategies:</h4>
      <ul>
        <li>Deep breathing exercises</li>
        <li>Regular exercise</li>
        <li>Healthy sleep habits</li>
        <li>Talking to someone you trust</li>
        <li>Professional help when needed</li>
      </ul>
    `
  },
  depression: {
    title: 'Understanding Depression',
    content: `
      <h3>What is Depression?</h3>
      <p>Depression is more than just feeling sad. It's a serious mental health condition that affects how you feel, think, and handle daily activities.</p>
      
      <h4>Warning Signs:</h4>
      <ul>
        <li>Persistent sad or empty feelings</li>
        <li>Loss of interest in activities</li>
        <li>Changes in sleep patterns</li>
        <li>Changes in appetite</li>
        <li>Difficulty concentrating</li>
      </ul>

      <h4>Getting Help:</h4>
      <ul>
        <li>Talk to a trusted adult</li>
        <li>Seek professional help</li>
        <li>Join support groups</li>
        <li>Stay connected with friends</li>
        <li>Maintain daily routines</li>
      </ul>
    `
  },
  stress: {
    title: 'Managing Stress',
    content: `
      <h3>Understanding Stress</h3>
      <p>Stress is your body's reaction to challenges. While some stress can be motivating, too much can be overwhelming.</p>
      
      <h4>Common Sources:</h4>
      <ul>
        <li>School pressure</li>
        <li>Social relationships</li>
        <li>Family expectations</li>
        <li>Future concerns</li>
        <li>Time management</li>
      </ul>

      <h4>Management Techniques:</h4>
      <ul>
        <li>Regular exercise</li>
        <li>Healthy sleep schedule</li>
        <li>Time management skills</li>
        <li>Relaxation techniques</li>
        <li>Talking to friends or family</li>
      </ul>
    `
  }
};

learnMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const topic = btn.closest('.topic-card')?.dataset.topic;
    if (topic && modal && modalContent) {
      const content = topicContent[topic];
      if (content) {
        modalContent.innerHTML = `
          <h2>${content.title}</h2>
          ${content.content}
        `;
        modal.style.display = 'block';
      }
    }
  });
});

closeModal?.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});