document.getElementById("lyricsForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;

    const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();

    document.getElementById("lyrics").textContent = data.lyrics || "Lyrics not found.";
});
