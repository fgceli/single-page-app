import expensesApi from "../../services/expensesApi.js";

function clickAlert()
{
    alert("Test");
};


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#submit').onclick = clickAlert;

}); 
const extraData = {
  allowAccess: async () => true,
  render: async () => {
    const summary = await expensesApi.getTotals();
    const view = /*html*/ `
    <h1>Fill in the form</h1>

    <form>
        <input id="hobby" placeholder = "Enter Hobby" type="text">
        <input id="submit" type="submit">
    </form>  
    `;
    return view;
  },
  postRender: async () => {},
};

export default extraData;
