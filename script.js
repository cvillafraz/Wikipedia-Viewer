  //variables
  const form=document.querySelector('form');
  const searchBtn=document.querySelector('#btn');
  const grid=document.querySelector('.grid');
  const input=document.querySelector('#search');
    let article=[],title=[],paragraph=[],anchor=[];
  //functions
  function createArticle(data){
      for (i = 0; i < data[1].length; i++) {
          article.push(document.createElement('article'));
          title.push(document.createElement('h2'));
          paragraph.push(document.createElement('p'));
          anchor.push(document.createElement('a'));
      }
  }
    function call(data) {
        createArticle(data);
       data.forEach(ar => {
           let j=0;
            switch (data.indexOf(ar)) {
                case 0:
                    break;
                case 1:
                    while(j<ar.length){
                        title[j].textContent=ar[j];
                        article[j].appendChild(title[j]);
                        j++;
                    }
                    break;
                case 2:
                    while (j < ar.length) {
                        paragraph[j].textContent = ar[j];
                        article[j].appendChild(paragraph[j]);
                        j++;
                    }
                    break;
                case 3:
                    while (j < ar.length) {
                        anchor[j].setAttribute('href',ar[j]);
                        anchor[j].setAttribute('target', '_blank');
                        anchor[j].appendChild(article[j]);
                        grid.appendChild(anchor[j]);
                        j++;
                    }
                    break;
            }
        });
    }
    function search(e){
        let script = document.createElement('script');
        script.src = `https://en.wikipedia.org/w/api.php?callback=call&action=opensearch&format=json&search=${e.target.previousElementSibling.value}&namespace=0&limit=9`;
        document.body.appendChild(script);
    }
  //events
 
    searchBtn.addEventListener('click',e=>{
      e.preventDefault();
      form.style.position='static';
      form.style.transform='none';
      form.style.margin='1.8rem 0';
        search(e);
    })
 

 

