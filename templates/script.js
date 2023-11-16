// 검색 기능을 처리하는 JavaScript 코드

function searchSkills() {
    // 검색창에서 입력한 값을 가져옴
    var searchTerm = document.getElementById('searchInput').value;

    // 실제로는 여기에서 서버에 검색 요청을 보내고 결과를 받아와야 함
    // 여기에서는 간단히 결과를 생성하여 예시로 보여줌
    var searchResults = getMockResults(searchTerm);

    // 결과를 표시하는 부분
    displayResults(searchResults);
}

function getMockResults(searchTerm) {
    // 실제로는 여기에서 서버와 통신하여 검색 결과를 가져와야 함
    // 여기에서는 간단한 예시로 몇 가지 분야를 만들어 보여줌
    var mockResults = ['웹 개발', '데이터 과학', '인공지능', '클라우드 컴퓨팅'];
    return mockResults.filter(result => result.toLowerCase().includes(searchTerm.toLowerCase()));
}

function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
    } else {
        var resultList = document.createElement('ul');

        results.forEach(function (result) {
            var listItem = document.createElement('li');
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });

        resultsContainer.appendChild(resultList);
    }
}
