class ParentApp extends React.Component {
  constructor(props) {
    super(props);
    this.chooseArmy = this.chooseArmy.bind(this);
    this.state = {
      steps: 0,
      UKF: 0,
      USA: 0,
      SU: 0,
      OW: 0,
      Ostheer: 0
    };

  }

  chooseArmy(e) {
    e.preventDefault();

    const option = e.target.elements.armychoice.value.toString(); //can add .trim() if necessary
    console.log(option);
    if (option === 'OWInput'){
      this.setState((prevState) => {
        return {OW: prevState.OW + 1, Ostheer: 0, SU: 0, UKF: 0, USA: 0};
      })
    }
    if (option === 'OstheerInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: prevState.Ostheer + 1, SU: 0, UKF: 0, USA: 0};//OW: true, Ostheer: false, SU: true, UKF: true, USA: true
      })
    }
    if (option === 'SUInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: prevState.SU + 1, UKF: 0, USA: 0};
      })
    }
    if (option === 'UKFInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: prevState.UKF + 1, USA: 0};
      })
    }
    if (option === 'USAInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 0, USA: prevState.USA + 1};
      })
    }
  };

  nextStep() {

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
          {this.state.OW > 0 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.OW > 1 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.OW > 2 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.OW > 3 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.OW > 4 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.OW > 5 ? <OWInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 0 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 1 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 2 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 3 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 4 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.Ostheer > 5 ? <OstheerInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 0 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 1 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 2 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 3 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 4 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.SU > 5 ? <SUInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 0 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 1 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 2 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 3 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 4 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.USA > 5 ? <USAInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 0 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 1 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 2 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 3 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 4 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
          {this.state.UKF > 5 ? <UKFInput chooseArmy={this.chooseArmy}/> : null}
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
                <form onSubmit={this.props.chooseArmy}>
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
              <form>
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
              <form>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="usaunits" id="usaunits">
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
              <form>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="usaunits" id="usaunits">
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
              <form>
                  <input type="text" name="quantity" placeholder="Create how many?" />
                  <select name="usaunits" id="usaunits">
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

ReactDOM.render(<ParentApp />,document.getElementById('app'))
