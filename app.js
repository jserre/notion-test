async function connectToNotion() {
    console.log('connectToNotion called');
    const apiKey = document.getElementById('apiKey').value;
    console.log('API Key:', apiKey);
    const response = await fetch('https://api.notion.com/v1/databases', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Notion-Version': '2021-05-13'
        }
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Data received:', data);
        displayDatabases(data.results);
    } else {
        console.error('Failed to connect to Notion API', response);
        alert('Failed to connect to Notion API');
    }
}

function displayDatabases(databases) {
    console.log('displayDatabases called');
    const databasesDiv = document.getElementById('databases');
    databasesDiv.innerHTML = '';

    databases.forEach(database => {
        const div = document.createElement('div');
        div.textContent = database.title[0].text.content;
        databasesDiv.appendChild(div);
    });
}
