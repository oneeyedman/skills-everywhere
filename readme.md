# Skills Everywhere

En este ejemplo se cargan una lista de skills desde `https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json` y se establece un límite máximo de 3 skills.

## Funcionamiento
1. Se hace la petición y cuando tenemos la lista de skills se pintan en una lista con su label y todo el equipo.
1. Una vez creada la lista busco cada checkbox y le aplico un listener para gestionar el marcado.
1. Si hago click marco y desmarco con normalidad, PERO seguidamente compruebo si hemos superado el límite de items marcados, si es que sí, desmarco muy, muy rápido el checkbox.
1. Luego llamo a una función que busca los checkbox marcados y genera un array con ellos
1. Y llamo a una función que me pinta este array de elementos seleccionados en el contenedor final

***
![Skills Everywhere](assets/images/skills-everywhere.png)
