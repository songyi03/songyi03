document.addEventListener('DOMContentLoaded', () => {
    const wordList = document.getElementById('wordList');
    const wordModal = new bootstrap.Modal(document.getElementById('wordModal'));
    const modalWord = document.getElementById('modalWord');
    const modalMeaning = document.getElementById('modalMeaning');
    const speakButton = document.getElementById('speakButton');
    let words = [];

    // 단어 데이터 가져오기
    async function fetchWords() {
        try {
            const response = await fetch('http://work2.junios.net:9001/word?number=20');
            words = await response.json();
            displayWords();
        } catch (error) {
            console.error('단어를 가져오는데 실패했습니다:', error);
            wordList.innerHTML = '<div class="col-12 text-center">단어를 불러오는데 실패했습니다.</div>';
        }
    }

    // 단어 표시하기
    function displayWords() {
        wordList.innerHTML = '';
        words.forEach((word, index) => {
            const wordCard = document.createElement('div');
            wordCard.className = 'col-md-4 col-sm-6';
            wordCard.innerHTML = `
                <div class="word-card" data-index="${index}">
                    <input type="checkbox" class="word-checkbox" id="word${index}">
                    <label for="word${index}">${word.word}</label>
                </div>
            `;
            wordList.appendChild(wordCard);
        });

        // 이벤트 리스너 추가
        document.querySelectorAll('.word-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    const index = card.dataset.index;
                    showWordDetails(index);
                }
            });
        });

        // 체크박스 이벤트 리스너
        document.querySelectorAll('.word-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const card = e.target.closest('.word-card');
                if (e.target.checked) {
                    card.classList.add('checked');
                } else {
                    card.classList.remove('checked');
                }
            });
        });
    }

    // 단어 상세 정보 표시
    function showWordDetails(index) {
        const word = words[index];
        modalWord.textContent = word.word;
        modalMeaning.textContent = word.meaning;
        wordModal.show();
    }

    // 발음 기능
    speakButton.addEventListener('click', () => {
        const word = modalWord.textContent;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    });

    // 초기 단어 로드
    fetchWords();
}); 