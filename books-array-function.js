const books=[
{title:"Kapteinis Apakšbiksis: ",author:"Deivs Pilkijs",isAvailable:true+" :ir pieejama"},
{title:"Grega dienasgrāmata: ",author:"Džefs Kinnijs",isAvailable:false+" :nav pieejama"},
]

for (let i = 0 ; i < books.length; i ++){
console.log("title:"+books[i].title+ books[i].isAvailable);
}

function printBookInfo(attribute) {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i][attribute]);
  }
}
printBookInfo("title");   
printBookInfo("author");  


