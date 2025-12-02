1. button - form এর মধ্যে যদি কোনও button use করা হয় এবং type button বলে না দেওয়া হয় তখন সেই
   বাটন কে submit button ধরে নেওয়া হয়। তাই button type বলে দিতে হয় যদি নরমাল বাটন হয়।

   <button type='button'>login <button>

2. এক পেজ থেকে অন্য পেজে event এর মধ্যমে যেতে
   window.location.href = "fileName";

3. function call করার পর return না করলে পরের code রান করে না। তাই রিটার্ন keyword use করা লাগে।

    if(age === 10){
        alert('Adult');
        return;
    }