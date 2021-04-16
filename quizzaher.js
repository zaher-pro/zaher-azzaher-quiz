(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = '#00caa2';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
                return false;
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} Vrai sur ${myQuestions.length} questions`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        if(slides[currentSlide].querySelector('input:checked')) {
            showSlide(currentSlide + 1);
        } else {
            alert('Please Enter an Answer, Veuillez saisir une réponse, الرجاء إدخال إجابة');
        }
        
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Quelle partie de l'oeuf dois-je cuisiner pour préparer avec succès une mayonnaise ?",
            answers: {
                a: "Le violet",
                b: "Le jaune",                 
                c: "Les blancs"
            },
            correctAnswer: "b"
        },
        {
            question: "Quand les manifestations des gilets jaunes ont-elles commencé?",
            answers: {
                a: "Fin 2019",
                b: "Fin 2018",
                c: "Début 2019"
            },
            correctAnswer: "b"
        },
        {
            question: "Quand la première Confinement a-t-elle commencé en France après l'augmentation des cas de COVID-19?",
            answers: {
                a: "Le 17 mars 2020",
                b: "Le 15 avril 2020",
                c: "Le 01 avril 2020",
                d: "Le 15 mars 2020"
            },
            correctAnswer: "a"
        },
      {
            question: "Qui a gagné la Coupe du monde de football en 2018 ?",
            answers: {
                a: "Allemagne",
                b: "France",
                c: "Brésil",
                d: "Argentine"
            },
            correctAnswer: "b"
        },
        {
            question: "Quand la Princesse/Lady Diana est-elle morte?",
            answers: {
                a: "31 août 1997",
                b: "27 août 1997",
                c: "25 août 1998",
                d: "23 août 1997"
            },
            correctAnswer: "a"
        },
        {
            question: "Il faut avoir la nationalité française et plus de 21 ans pour voter à l'élection présidentielle ?",
            answers: {
                a: "Vrai",
                b: "La nationalité française et plus de 18 ans",
                c: "Juste la nationalité française"
            },
            correctAnswer: "b"
        },
        {
            question: "Pour combien d'années le président de la République française est-il élu ?",
            answers: {
                a: "7 ans",
                b: "5 ans",
                c: "6 ans",
                d: "4 ans"
            },
            correctAnswer: "b"
        },
        {
            question: "Quel est le nombre de députés à l'Assemblée nationale française ?",
            answers: {
                a: "311",
                b: "507",
                c: "577",
                d: "570"
            },
            correctAnswer: "c"
        },
        {
            question: "Quel est le pouvoir de l'Assemblée nationale et du Sénat ?",
            answers: {
                a: "Pouvoir exécutif",
                b: "Pouvoir judiciaire",
                c: "Une autre Pouvoir",
                d: "Pouvoir législatif"
            },
            correctAnswer: "d"
        },
        {
            question: "En quelle année le français remplace-t-il le latin pour devenir la langue officielle du droit et de l'administration française ?",
            answers: {
                a: "1128",
                b: "1539",
                c: "1287",
                d: "1342"
            },
            correctAnswer: "b"
        },
        {
            question: "Quel est le symbole du petit déjeuner français ?",
            answers: {
                a: "Le pain",
                b: "Le jambon",
                c: "Le croissant",
                d: "Le fromage"
            },
            correctAnswer: "c"
        },
        {
            question: "À quelle partie du corps fait référence le mot « gastronomie » ?",
            answers: {
                a: "L'estomac",
                b: "La langue",
                c: "Le palais",
                d: "La bouche"
            },
            correctAnswer: "a"
        },
        {
            question: "De quelle année datent les dernières rectifications orthographiques du français ?",
            answers: {
                a: "2010",
                b: "1990",
                c: "1980",
                d: "2000"
            },
            correctAnswer: "b"
        },
        {
            question: "Combien de régions la France compte-t-elle ?",
            answers: {
                a: "13",
                b: "15",
                c: "18",
                d: "20"
            },
            correctAnswer: "a"
        },
        {
            question: "Avec combien de pays la France métropolitaine a-t-elle une frontière terrestre ?",
            answers: {
                a: "7",
                b: "9",
                c: "6",
                d: "8"
            },
            correctAnswer: "d"
        },
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();

// if (userAnswer === 0) {
//     nextButton.style = 'display: none;'
// }