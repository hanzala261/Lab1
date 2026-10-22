// Skill filter
const chips = document.querySelectorAll('.chip');
const skills = document.querySelectorAll('.skill-list li');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    skills.forEach(li => { li.hidden = filter !== 'all' && li.dataset.type !== filter; });
  });
});
// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
