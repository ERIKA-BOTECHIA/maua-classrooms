export const formBooks = `
<div class="container">
 <div class="row">
  <form id="formBooks">
  <fieldset class="form-group">
    <legend>NOVO LIVRO</legend>
    <label for="title">Title:</label>
    <input type="text" name="title" id="title" required>
    <label for="author">Author:</label>
    <input type="text" name="author" id="author" required>
    <label for="year">Year:</label>
    <input type="number" name="year" id="year" required>
    <label for="publisher">Publisher:</label>
    <input type="text" name="publisher" id="publisher" required>
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
  </fieldset>
  </form>
 </div>
</div>
`


export const formTask = `
<div class="container">
 <div class="row">
  <form id="formBooks">
  <fieldset class="form-group">
    <legend>NOVA TASK</legend>
    <p>
    <label for="title">TITULO:</label>
    <input type="text" name="title" id="title" required>
    <span class="fa fas-list"></span>
    </p>
    <label for="author">Author:</label>
    <input type="text" name="author" id="author" required>
    <label for="year">Year:</label>
    <input type="number" name="year" id="year" required>
    <label for="publisher">Publisher:</label>
    <input type="text" name="publisher" id="publisher" required>
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
  </fieldset>
  </form>
 </div>
</div>`