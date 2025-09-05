const estudiantes = {
    "0000291605":{nombre:"Adolfo Garzon Mendez",notas:{caracterizacion:4.8,peliculas:4.5,challenge:4,tareas:4.3,quiz:4,proyecto:4.6,parcial:2.8,final:3.9}},
    "0000157017":{nombre:"Andres Gonzalo Diaz Lazaro",notas:{caracterizacion:5,peliculas:5,challenge:4.4,tareas:4.7,quiz:5,proyecto:4.8,parcial:5,final:4.9}},
    "0000371189":{nombre:"Camilo Andres Briceno Leon",notas:{caracterizacion:0,peliculas:4.8,challenge:4.2,tareas:3.5,quiz:5,proyecto:4.8,parcial:4.6,final:4.5}},
    "0000371414":{nombre:"Diego Alejandro Rios Gomez",notas:{caracterizacion:5,peliculas:5,challenge:5,tareas:5,quiz:4.5,proyecto:4.9,parcial:4.9,final:4.9}},
    "0000288859":{nombre:"Elkin Alvaro Lopez Morales",notas:{caracterizacion:4.8,peliculas:5,challenge:4.8,tareas:4.9,quiz:3.5,proyecto:4.9,parcial:4,final:4.5}},
    "0000153392":{nombre:"Gabriel Antonio Mejia Auz",notas:{caracterizacion:4.8,peliculas:4.7,challenge:4,tareas:4.4,quiz:5,proyecto:4.4,parcial:3.8,final:4.3}},
    "0000272430":{nombre:"Isabel Cristina Morales Parra",notas:{caracterizacion:5,peliculas:4.8,challenge:4,tareas:4.4,quiz:4,proyecto:4.6,parcial:3.3,final:4.1}},
    "0000375870":{nombre:"Jairo Rodriguez Alba",notas:{caracterizacion:5,peliculas:4.8,challenge:4,tareas:4.4,quiz:4.5,proyecto:4.6,parcial:4.3,final:4.5}},
    "0000372093":{nombre:"Jennifer Liseth Rincon Campos",notas:{caracterizacion:4.8,peliculas:4.8,challenge:4,tareas:4.4,quiz:4.5,proyecto:4.8,parcial:4.1,final:4.5}},
    "0000377952":{nombre:"Jose Nicolas Gamboa Hidalgo",notas:{caracterizacion:4.7,peliculas:4.8,challenge:4.4,tareas:4.6,quiz:4,proyecto:4.9,parcial:4.5,final:4.6}},
    "0000178278":{nombre:"Juan Camilo Martinez Correa",notas:{caracterizacion:4.8,peliculas:5,challenge:4.8,tareas:4.9,quiz:4.5,proyecto:4.9,parcial:4.8,final:4.8}},
    "0000357476":{nombre:"Juan Javier Nino Diaz",notas:{caracterizacion:4.8,peliculas:5,challenge:4.2,tareas:4.6,quiz:4,proyecto:4.7,parcial:2.9,final:4.1}},
    "0000377006":{nombre:"Laura Camila Gutierrez Lancheros",notas:{caracterizacion:4.8,peliculas:4.8,challenge:4.2,tareas:4.5,quiz:4,proyecto:4.7,parcial:4.1,final:4.4}},
    "0000377500":{nombre:"Lorena Andrea Valero Gonzalez",notas:{caracterizacion:4.8,peliculas:5,challenge:4.6,tareas:4.8,quiz:5,proyecto:4.7,parcial:4.9,final:4.8}},
    "0000235612":{nombre:"Maria Lucia Lacouture Mindiola",notas:{caracterizacion:5,peliculas:5,challenge:4.6,tareas:4.8,quiz:4.5,proyecto:4.8,parcial:4.9,final:4.8}},
    "0000289560":{nombre:"Maria Paula Arciniegas Longas",notas:{caracterizacion:4.8,peliculas:5,challenge:4,tareas:4.5,quiz:4.5,proyecto:4.4,parcial:3.5,final:4.2}},
    "0000370268":{nombre:"Marlon Francisco Umbarila Ortega",notas:{caracterizacion:4.8,peliculas:4.8,challenge:4,tareas:4.4,quiz:4.5,proyecto:4.4,parcial:4,final:4.3}},
    "0000373559":{nombre:"Nataly Valbuena Lopez",notas:{caracterizacion:5,peliculas:5,challenge:5,tareas:5,quiz:5,proyecto:4.9,parcial:4.8,final:4.9}},
    "0000328241":{nombre:"Ronald Mauricio Gonzalez Lozano",notas:{caracterizacion:4.8,peliculas:5,challenge:4.8,tareas:4.9,quiz:4.5,proyecto:4.9,parcial:5,final:4.9}},
    "0000209774":{nombre:"Sabrina Anais Miranda Franco",notas:{caracterizacion:5,peliculas:5,challenge:4.6,tareas:4.8,quiz:0,proyecto:4.8,parcial:4.3,final:4.2}},
    "0000372109":{nombre:"Sonia Natalia Franco Saavedra",notas:{caracterizacion:5,peliculas:5,challenge:4.4,tareas:4.7,quiz:4.5,proyecto:4.8,parcial:5,final:4.8}}
};

let radarChart = null;

function generarMensajeMotivador(nota, nombre) {
    const primerNombre = nombre.split(' ')[0];
    if (nota >= 4.5) {
        return {
            icon: "🏆",
            message: `<strong>¡Felicitaciones, ${primerNombre}!</strong> Tu rendimiento ha sido excepcional. Demuestras un dominio increíble de los temas y tu dedicación es una inspiración para todos. ¡Sigue apuntando a lo más alto!`,
            className: "excellent"
        };
    } else if (nota >= 4.0) {
        return {
            icon: "👍",
            message: `<strong>¡Muy bien hecho, ${primerNombre}!</strong> Has logrado un resultado sobresaliente que refleja tu gran esfuerzo. Estás en un camino de éxito y crecimiento constante. ¡No te detengas ahora!`,
            className: "good"
        };
    } else if (nota >= 3.0) {
        return {
            icon: "💪",
            message: `<strong>¡Buen trabajo, ${primerNombre}!</strong> Estás construyendo una base sólida. Identifica tus áreas de oportunidad y sigue trabajando en ellas; con perseverancia, alcanzarás todas tus metas.`,
            className: "needs-improvement"
        };
    } else {
        return {
            icon: "🌱",
            message: `<strong>¡Ánimo, ${primerNombre}!</strong> Todo gran viaje comienza con un paso. Este es un punto de partida para crecer. Concéntrate, busca apoyo si lo necesitas y verás cómo mejoras en la próxima oportunidad.`,
            className: "needs-work"
        };
    }
}

function consultarNotas() {
    const codigo = document.getElementById("codigo").value.trim();
    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("result");
    
    errorElement.textContent = "";
    resultElement.style.display = "none";
    
    if (!codigo) {
        errorElement.textContent = "Por favor, ingresa tu código de estudiante.";
        return;
    }
    
    const estudiante = estudiantes[codigo];
    
    if (!estudiante) {
        errorElement.textContent = "El código ingresado no corresponde a ningún estudiante registrado.";
        return;
    }

    const motivationalCard = document.getElementById('motivational-card');
    const motivationalInfo = generarMensajeMotivador(estudiante.notas.final, estudiante.nombre);
    
    motivationalCard.innerHTML = `<span class="motivational-icon">${motivationalInfo.icon}</span><p>${motivationalInfo.message}</p>`;
    motivationalCard.className = 'motivational-card ' + motivationalInfo.className;
    
    document.getElementById("nombre").textContent = estudiante.nombre;
    document.getElementById("codigoEstudiante").textContent = codigo;
    
    const notasDetalle = document.getElementById("notasDetalle");
    notasDetalle.innerHTML = `<td>Calificación</td><td>${estudiante.notas.caracterizacion.toFixed(1)}</td><td>${estudiante.notas.peliculas.toFixed(1)}</td><td>${estudiante.notas.challenge.toFixed(1)}</td><td>${estudiante.notas.tareas.toFixed(1)}</td><td>${estudiante.notas.quiz.toFixed(1)}</td><td>${estudiante.notas.proyecto.toFixed(1)}</td><td>${estudiante.notas.parcial.toFixed(1)}</td>`;
    
    document.getElementById("notaFinal").textContent = estudiante.notas.final.toFixed(1);
    
    crearGraficoRadar(estudiante.notas);
    
    resultElement.style.display = "block";
}

function crearGraficoRadar(notas) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) {
        radarChart.destroy();
    }
    const data = {
        labels: ['Caracterización (3%)','Películas (3%)','Challenge (14%)','Tareas (20%)','Quiz (10%)','Proyecto (40%)','Parcial (30%)'],
        datasets: [{
            label: 'Tus Calificaciones',
            data: [notas.caracterizacion,notas.peliculas,notas.challenge,notas.tareas,notas.quiz,notas.proyecto,notas.parcial],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };
    const config = {
        type: 'radar',
        data: data,
        options: {
            maintainAspectRatio: false,
            elements: {line: {borderWidth: 3}},
            scales: {
                r: {
                    angleLines: {display: true},
                    suggestedMin: 0,
                    suggestedMax: 5,
                    ticks: {backdropColor: 'rgba(255, 255, 255, 0.75)'}
                }
            }
        }
    };
    radarChart = new Chart(ctx, config);
}

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('consultarBtn');
    if (boton) {
        boton.addEventListener('click', consultarNotas);
    }
});