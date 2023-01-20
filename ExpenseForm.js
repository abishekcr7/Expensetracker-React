import './ExpenseForm.css'

const ExpenseForm = () => {

  const Output=(e) =>{
    
    var title=document.getElementById("title").value 
    
    console.log(title)
  }
  
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" id='title' onChange={Output}/> 
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" id='amount'/> 
        </div>
        <div className='new-expense__control'>
            <label >Date</label>
            <input type="date" min='2019-01-01' max='2022-12-31' id='Date'/> 
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
