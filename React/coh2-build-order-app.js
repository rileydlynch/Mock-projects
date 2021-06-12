class ParentApp extends React.Component {
  constructor(props) {
    super(props);
    this.chooseArmy = this.chooseArmy.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.state = {
      steps: 1,
      UKF: 0,
      USA: 0,
      SU: 0,
      OW: 0,
      Ostheer: 0,
      unit1: '',
      unit2: '',
      unit3: '',
      unit4: '',
      unit5: '',
      unit6: ''
    };
  }

  chooseArmy(e) {
    e.preventDefault();
    
    const option = e.target.elements.armychoice.value.toString(); //can add .trim() if necessary
    console.log(option);

    //This section allows creation of the initial input for a particular army.
    if (option === 'OWInput'){
      this.setState((prevState) => {
        return {OW: 1, Ostheer: 0, SU: 0, UKF: 0, USA: 0};
      })
    }
    if (option === 'OstheerInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 1, SU: 0, UKF: 0, USA: 0};
      })
    }
    if (option === 'SUInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 1, UKF: 0, USA: 0};
      })
    }
    if (option === 'UKFInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 1, USA: 0};
      })
    }
    if (option === 'USAInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 0, USA: 1};
      })
    }
    console.log(this.state.OW);
  };

  nextStep(e) {
    e.preventDefault();
    const armyname = e.target.elements;
    var chosenUnit =  e.target.elements.owunits.value.toString();
    var unitNumber = 'unit' + this.state.steps
    // console.log(unitNumber)
    console.log(chosenUnit)

    //This section allows user to add additional inputs for a particular army.
    if (armyname.ostheerunits){
      this.setState((prevState) => {
        return {OW: 0, Ostheer: prevState.Ostheer + 1, SU: 0, UKF: 0, USA: 0, steps: prevState.steps + 1};
      })
      console.log('The Ostheer state count is: ' + this.state.Ostheer)
    }
    if (armyname.owunits){
      this.setState((prevState) => {
        return {OW: prevState.OW + 1, Ostheer: 0, SU: 0, UKF: 0, USA: 0, steps: prevState.steps + 1, unitNumber: chosenUnit};
      })
      console.log('The Oberkommando West state count is: ' + this.state.OW)
    }
    if (armyname.suunits){
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: prevState.SU + 1, UKF: 0, USA: 0, steps: prevState.steps + 1};
      })
      console.log('The Soviet Union state count is: ' + this.state.SU)
    }
    if (armyname.ukfunits != null){
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: prevState.UKF + 1, USA: 0, steps: prevState.steps + 1};
      })
      console.log('The UKF state count is: ' + this.state.UKF)
    }
    if (armyname.usaunits){
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 0, USA: prevState.USA + 1, steps: prevState.steps + 1};
      })
      console.log('The USA state count is: ' + this.state.USA)
    }
  };

  render() {
    return (
        <div>
          <form onSubmit={this.chooseArmy}>
            <select name="armychoice" id="armychoice">
              <option value='OWInput'>Oberkommando West</option>
              <option value="OstheerInput">Ostheer</option>
              <option value="SUInput">Soviet Union</option>
              <option value="UKFInput">UKF</option>
              <option value="USAInput">US Forces</option>
            </select>
            <button>Choose army</button>
          </form>
          {this.state.OW > 0 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.OW > 1 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.OW > 2 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.OW > 3 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.OW > 4 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.OW > 5 ? <OWInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 0 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 1 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 2 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 3 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 4 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.Ostheer > 5 ? <OstheerInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 0 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 1 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 2 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 3 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 4 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.SU > 5 ? <SUInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 0 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 1 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 2 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 3 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 4 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.USA > 5 ? <USAInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 0 ? <UKFInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 1 ? <UKFInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 2 ? <UKFInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 3 ? <UKFInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 4 ? <UKFInput nextStep={this.nextStep}/> : null}
          {this.state.UKF > 5 ? <UKFInput nextStep={this.nextStep}/> : null}
          <div>
            {this.state.steps > 0 ? <ImgOutput unit={this.state.unit1} /> : null}
            {this.state.steps > 1 ? <ImgOutput unit={this.state.unit2} /> : null}
            {this.state.steps > 2 ? <ImgOutput unit={this.state.unit3} /> : null}
            {this.state.steps > 3 ? <ImgOutput unit={this.state.unit4} /> : null}
            {this.state.steps > 4 ? <ImgOutput unit={this.state.unit5} /> : null}
            {this.state.steps > 5 ? <ImgOutput unit={this.state.unit6} /> : null}
          </div>
          <button onClick={this.genOrder}>Click here to generate Build Order text and image</button>

        </div>
        )
    }
}

class UKFInput extends React.Component {
  constructor(props) {
    super(props);
    // this.chooseArmy = this.chooseArmy.bind(this);
  }
  
  render() {
        return (
            <div>
                <form onSubmit={this.props.nextStep}>
                    <input type="text" name="quantity" placeholder="Create how many?"/>
                    <select name="ukfunits" id="ukfunits">
                      <option value="sniper">.55 cal Armor-Piercing Sniper</option>
                      <option value="aec">AEC</option>
                      <option value="assinfantry">Assault Infantry</option>
                      <option value="assofficer">Assault Officer</option>
                      <option value="commandos">Commandos</option>
                      <option value="rsengineer">Engineer Recovery Squad</option>
                      <option value="engineers">Engineers</option>
                      <option value="infantry">Infantry Squad</option>
                      <option value="mortarteam">Mortar Team</option>
                      <option value="6pounder">QF 6-pounder AT gun</option>
                      <option value="thinfantry">Tank Hunter Infantry</option>
                      <option value="uc">Universal Carrier</option>
                      <option value="vickers">Vickers Heavy Machine Gun</option>
                    </select>
                    <button>Next step</button>
                </form>
            </div>
        )
    }
}

class USAInput extends React.Component {
  render() {
      return (
          <div>
              <form onSubmit={this.props.nextStep}>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="usaunits" id="usaunits">
                    <option value="ambulance">Ambulance</option>
                    <option value="captain">Captain</option>
                    <option value="combateng">Combat Engineers</option>
                    <option value="halftrack">Half-track</option>
                    <option value="lieutenant">Lieutenant</option>
                    <option value="atgun">M1 57mm AT gun</option>
                    <option value="stuart">M1A1 Stuart</option>
                    <option value="utilitycar">M20 Utility Car</option>
                    <option value="M2HB .50 cal Machine Gun">M2HB .50 cal Machine Gun</option>
                    <option value="mortarteam">Mortar Team</option>
                    <option value="howitzer">Pack Howitzer</option>
                    <option value="pathfinder">Pathfinders</option>
                    <option value="rearech">Rear Echelon</option>
                    <option value="rifleman">Rifleman</option>
                  </select>
                  <button>Next step</button>
              </form>
          </div>
      )
  }
}

class SUInput extends React.Component {
  render() {
      return (
          <div>
              <form onSubmit={this.props.nextStep}>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="suunits" id="suunits">
                    <option value="combengis">Combat Engineers</option>
                    <option value="conscript">Conscripts</option>
                    <option value="guards">Guards Infantry</option>
                    <option value="m1910">M1910 Maxim Machine Gun</option>
                    <option value="m3a1">M3A1 Scout Car</option>
                    <option value="m5halftrack">M5 Half-track</option>
                    <option value="penal">Penal Battalion</option>
                    <option value="pm41mortar">PM-41 82mm Mortar Team</option>
                    <option value="Scout Sniper">Scout Sniper</option>
                    <option value="shock">Shock Infantry</option>
                    <option value="su76">SU-76M Assault Gun</option>
                    <option value="t70">T-70 Light Tank</option>
                    <option value="zis">ZiS-3 76mm Divisional Field Gun</option>
                  </select>
                  <button>Next step</button>
              </form>
          </div>
      )
  }
}

class OstheerInput extends React.Component {
  render() {
      return (
          <div>
              <form onSubmit={this.props.nextStep}>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="ostheerunits" id="ostheerunits">
                    <option value="grenadier">Grenadiers</option>
                    <option value="grw34">GrW 34 Mortar Team</option>
                    <option value="mg42">MG42 Machine Gun</option>
                    <option value="pak40">Pak 40 AT Gun</option>
                    <option value="panzergren">Panzergrenadiers</option>
                    <option value="pioneer">Pioneers</option>
                    <option value="sdkfz222">SdKfz 222 Scout Car</option>
                    <option value="mortarhalf">SdKfz 250/7 Mortar Half-track</option>
                    <option value="SdKfz Half-track">SdKfz Half-track</option>
                    <option value="ostsniper">Sniper</option>
                  </select>
                  <button>Next step</button>
              </form>
          </div>
      )
  }
}

class OWInput extends React.Component {
  render() {
      return (
          <div>
              <form onSubmit={this.props.nextStep}>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="owunits" id="owunits">
                    <option value="leig">7.5cm le.IG Infantry Support Gun</option>
                    <option value="kubelwagon">Kubelwagon</option>
                    <option value="luchs">Panzer II Luchs</option>
                    <option value="raktenwerfer">Raktenwerfer</option>
                    <option value="sdkfz221">Sd.Kfz 221 Scout Car</option>
                    <option value="puma">SdKfz 234 Puma Armored Car</option>
                    <option value="stuka">SdKfz 251 Stuka Half-track</option>
                    <option value="sdkfz25117">SdKfz 251/17 Flak Half-track</option>
                    <option value="SdKfz 251/20 Infrared Half-track">SdKfz 251/20 Infrared Half-track</option>
                    <option value="sturmpio">Sturmpioneers</option>
                    <option value="supplyht">sWS Supply Half-track</option>
                    <option value="volks">Volksgrenadiers</option>
                  </select>
                  <button>Next step</button>
              </form>
          </div>
      )
  }
}

class ImgOutput extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div>
      <h4>{this.props.unit}</h4>
      <figure>
        <img src="https://i.imgur.com/nOvrd9j.png" />
        <figcaption >Raktenwerfer</figcaption>
      </figure>
    </div>
  )}

  }

ReactDOM.render(<ParentApp />,document.getElementById('app'))
