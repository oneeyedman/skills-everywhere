'use strict';

const api = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
const skills = document.querySelector('.skills');
const skillsToShow = document.querySelector('.my-skills');
// Límite de skills
const skillLimit = 3;
// Contador de checkbox marchados
let selectedSkillItems = 0;

function showSkills(arr) {
  let items = '';
  for (const a of arr) {
    items += `<li class="my-skill">${a}</li>`;
  }
  skillsToShow.innerHTML = items;
}

function getSelectedSkills() {
  let selectedSkills = [];
  // Con este selector solo recojo las que están marcadas
  const skillItems = skills.querySelectorAll('.skill__item:checked');
  for (const s of skillItems) {
    // Añado al array el texto que aparece junto a cada checkbox sin los espacios en blanco
    selectedSkills.push(s.parentElement.innerText.trim());
  }
  // En esta constante tengo un array actualizado de las skills marcadas
  console.log(selectedSkills);
  showSkills(selectedSkills);
}

function ckeckItem(e) {
  // Pillo cada checkbox en el que se hace click
  const checkbox = e.currentTarget;

  if (checkbox.checked === true) {
    // Actualizo mi contador de checkbox marchados
    selectedSkillItems++;

    // Si he marcado de más desmarco el último muy rápido
    if (selectedSkillItems > skillLimit) {
      checkbox.checked = false;
      selectedSkillItems--;
    }
  } else {
    selectedSkillItems--;
  }    

  // Recojo la lista de skills marcadas
  getSelectedSkills();
}

function createSkillBlock(arr) {
  // Pinto las skills en su UL
  let items = '';
  for (const a of arr) {
    items += `
      <li class="skill">
        <label for="skill-${a}">
          <input name="skill" id="skill-${a}" type="checkbox" class="skill__item"> ${a}
        </label>
      </li>
    `;
  }
  skills.innerHTML = items;

  // Y les añado un listener
  const skillItems = skills.querySelectorAll('.skill__item');
  for (const s of skillItems) {
    s.addEventListener('click', ckeckItem);
  }
}

function getSkills(url) {
  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      // Saco el array de skills a una variable
      const {skills} = data;

      // Pinto mi listado de skills
      createSkillBlock(skills);
    });
}

getSkills(api);