var linkedin= document.getElementById('linkedin');
var instagram = document.getElementById('instagram');
var github=document.getElementById('github');
var twitter = document.getElementById('twitter');
var cvButton = document.getElementById('down');


// add eventlistener
linkedin.addEventListener('click', linkedinEvent);
instagram.addEventListener('click', instagramEvent);
github.addEventListener('click',githubEvent);
twitter.addEventListener('click',twitterEvent);
cvButton.addEventListener('click',cvButtonEvent);

function linkedinEvent(e){
    e.preventDefault();
    window.open(
        'https://www.linkedin.com/in/ava-yaz-63214a241/',
        '_blank'
    );
}
function instagramEvent(e){
    e.preventDefault();
   window.open(
       'https://www.instagram.com/fanta.yh/',
       '_blank'
   )
}
function githubEvent (e){
    e.preventDefault();
    window.open(
        'https://github.com/Yhworld',
        '_blank'
    );
}
function twitterEvent(e){
    e.preventDefault();
    window.open(
        'https://twitter.com/yash_yaz',
        '_blank'
    );
}
function cvButtonEvent(e){
    e.preventDefault();
    window.open(
        'https://www.mediafire.com/file/0p5a1rer36bsktd/CV_%2528Yahya_Hussein%2529.pdf/file',
        '_blank'
    );
}
