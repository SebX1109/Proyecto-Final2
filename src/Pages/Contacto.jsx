const Contacto = () => { 
    return(
        <>
        <h1>Contacto</h1>
        <form>
  <fieldset abled>
    <legend>Realiza la siguiente encuesta y el mejor especialista para ti se pondra en contacto contigo: </legend>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Brinanos tu Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comenta lo que sientes ultimamente </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">¿Que emocion sientes regularmente?</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Comentanos"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">¿Usted ha tenido interferencias y/o desmotivacion en la capacidad para...?</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Comentanos"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">¿En tus momentos libres, te sientes mejor...?</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Comentanos"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">¿En cualquier momento sientes que poierdes la confianza en ti mismo o algo similar ?</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Comentanos"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">¿Has sentido dificultades para respirar dolores extraños o presion en el pecho en situaciones de media o baja tension cuando antes esto no sucedia...?</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Comentanos"/>
    </div>


    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Selecciona que tanta urgencia necesitas para ser atendido, si sientes que no es algo tan grave pero que puede escalar no uses el servicio de alguien que lo necesita mas...</label>
      <select id="disabledSelect" class="form-select">
        <option>Muy urgente</option>
        <option>Un poco urgente  </option>
        <option>Moderado</option>
        <option>Nada muy grave</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Ya has acudido a nuestros servicios?
        </label>
        </div>
        <br />
        <h1>Si lo consideras necesario marca uno o mas de los siguientes recuadros</h1>

        <h3>Has sido diagnosticado con alguna de las siguientes enfermedades?</h3>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Depresion
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Ansiedad
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        TDAH
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Trastorno de oposición desafiante.
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Trastorno de la conducta.
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Trastorno obsesivo-compulsivo.
        </label>
      </div>
      <br />
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" abled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
        Trastorno por estrés postraumático.
        </label>
      </div>
      <br /><br />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
        </>
    )
    
     }
     export default Contacto;