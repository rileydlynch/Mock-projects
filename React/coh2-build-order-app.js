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
      unit6: '',
      currentunit: '',
      '7.5cm le.IG Infantry Support Gun': 'https://i.imgur.com/jeBHdas.png',
      'Kubelwagon': 'https://i.imgur.com/ltYDgug.png',
      'Panzer II Luchs': 'https://i.imgur.com/QJ3G2fT.png',
      'Raktenwerfer': 'https://i.imgur.com/nOvrd9j.png',
      'Sd.Kfz 221 Scout Car': 'https://i.imgur.com/kkIf6Kx.png',
      'SdKfz 234 Puma Armored Car': 'https://i.imgur.com/ZdjuxbP.png',
      'SdKfz 251 Stuka Half-track': 'https://i.imgur.com/HlwNKnG.png',
      'SdKfz 251/17 Flak Half-track': 'https://i.imgur.com/1yesYtO.png',
      'SdKfz 251/20 Infrared Half-track': 'https://i.imgur.com/ywwxiUX.png',
      'Sturmpioneers': 'https://i.imgur.com/gtTBLL6.png',
      'sWS Supply Half-track': 'https://i.imgur.com/lFbyGeN.png',
      'Volksgrenadiers': 'https://i.imgur.com/0Dl4GJi.png',
      'Combat Engineers': 'https://i.imgur.com/Fsjxiog.png',
      'Conscripts': 'https://i.imgur.com/8NuaQhh.png',
      'Guards Infantry': 'https://i.imgur.com/H0oHsXv.png',
      'M1910 Maxim Machine Gun': 'https://i.imgur.com/VzofTPL.png',
      'M3A1 Scout Car': 'https://i.imgur.com/8vZKKdF.png',
      'M5 Half-track': 'https://i.imgur.com/OnPBzcO.png',
      'Penal Battalion': 'https://i.imgur.com/cp3PUl1.png',
      'PM-41 82mm Mortar Team': 'https://i.imgur.com/GRRtiIT.png',
      'HM38 120mm Mortar Team': 'https://i.imgur.com/GRRtiIT.png',
      'Scout Sniper': 'https://i.imgur.com/btjrHfX.png',
      'Shock Infantry': 'https://i.imgur.com/X5iAriA.png',
      'SU-76M Assault Gun': 'https://i.imgur.com/PpuVc9A.png',
      'T-70 Light Tank': 'https://i.imgur.com/DkFM03U.png',
      'ZiS-3 76mm Divisional Field Gun': 'https://i.imgur.com/hevO2vD.png',
      'Grenadiers': 'https://i.imgur.com/k6KOVPS.png',
      'GrW 34 Mortar Team': 'https://i.imgur.com/ok0YoC0.png',
      'MG42 Machine Gun': 'https://i.imgur.com/c0c89Hw.png',
      'Pak 40 AT Gun': 'https://i.imgur.com/PbEhVYB.png',
      'Panzergrenadiers': 'https://i.imgur.com/J2wWqh2.png',
      'Pioneers': 'https://i.imgur.com/kkiNEOT.png',
      'SdKfz 222 Scout Car': 'https://i.imgur.com/zt2av25.png',
      'SdKfz 250/7 Mortar Half-track': 'https://i.imgur.com/M24eX0s.png',
      'SdKfz 250 Half-track': 'https://i.imgur.com/M24eX0s.png',
      'SdKfz 251 Half-track': 'https://i.imgur.com/tMKK426.png',
      'Ostheer Sniper': 'https://i.imgur.com/fsCkmky.png',
      '.55 cal Armor-Piercing Sniper': 'https://i.imgur.com/DFO7raw.png',
      'AEC': 'https://i.imgur.com/2yYCDn8.png',
      'Assault Infantry': 'https://i.imgur.com/a8PPWHa.png',
      'Assault Officer': 'https://i.imgur.com/8usBLqz.png',
      'Commandos': 'https://i.imgur.com/TuFPW2E.png',
      'Engineer Recovery Squad': 'https://i.imgur.com/BENXibo.png',
      'Royal Engineers': 'https://i.imgur.com/BENXibo.png',
      'Infantry Squad': 'https://i.imgur.com/YdDmNMv.png',
      'M1 81mm Mortar Team': 'https://i.imgur.com/JgIKxw3.png',
      'QF 6-pounder AT gun': 'https://i.imgur.com/bIq2u8S.png',
      'Tank Hunter Infantry': 'https://i.imgur.com/YdDmNMv.png',
      'Universal Carrier': 'https://i.imgur.com/zj5kBmD.png',
      'Vickers Heavy Machine Gun': 'https://i.imgur.com/CCoA1kx.png',
      'Ambulance': 'https://i.imgur.com/mclegG8.png',
      'Assault Engineers': 'https://i.imgur.com/PBLdFDF.png',
      'Captain': 'https://i.imgur.com/fVpNrG9.png',
      'Lieutenant': 'https://i.imgur.com/UKnEXKE.png',
      'M1 57mm AT gun': 'https://i.imgur.com/4HmEzIJ.png',
      'M15A1 AA Half-track': 'https://i.imgur.com/65ekUma.png',
      'M20 Utility Car': 'https://i.imgur.com/VRL2kwR.png',
      'M2HB .50 cal Machine Gun': 'https://i.imgur.com/dSWDRtR.png',
      'M5A1 Stuart': 'https://i.imgur.com/jc3a1jg.png',
      'Mortar Team': 'https://i.imgur.com/idACEZY.png',
      'Pack Howitzer': 'https://i.imgur.com/qKJzCKz.png',
      'Pathfinders': 'https://i.imgur.com/65zdTdi.png',
      'Rangers': 'https://i.imgur.com/svCe38R.png',
      'Rear Echelon': 'https://i.imgur.com/jvS1t4D.png',
      'Rifleman': 'https://i.imgur.com/zRpDi6V.png',
    };
  }

  chooseArmy(e) {
    e.preventDefault();
    
    const option = e.target.elements.armychoice.value.toString(); //can add .trim() if necessary
    console.log(option);

    //This section allows creation of the initial input for a particular army.
    if (option === 'OWInput'){
      this.setState((prevState) => {
        return {OW: 1, Ostheer: 0, SU: 0, UKF: 0, USA: 0, unit1: '', unit2: '', unit3: '', unit4: '', unit5: '', unit6: '', steps: 1};
      })
    }
    if (option === 'OstheerInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 1, SU: 0, UKF: 0, USA: 0, unit1: '', unit2: '', unit3: '', unit4: '', unit5: '', unit6: '', steps: 1};
      })
    }
    if (option === 'SUInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 1, UKF: 0, USA: 0, unit1: '', unit2: '', unit3: '', unit4: '', unit5: '', unit6: '', steps: 1};
      })
    }
    if (option === 'UKFInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 1, USA: 0, unit1: '', unit2: '', unit3: '', unit4: '', unit5: '', unit6: '', steps: 1};
      })
    }
    if (option === 'USAInput'){
      this.setState((prevState, props) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 0, USA: 1, unit1: '', unit2: '', unit3: '', unit4: '', unit5: '', unit6: '', steps: 1};
      })
    }
    console.log(this.state.OW);
  };

  nextStep(e) {
    e.preventDefault();
    const armyname = e.target.elements;
    // var chosenUnit =  e.target.elements.owunits.value.toString();
    var unitNumber = 'unit' + this.state.steps

    //This section allows user to add additional inputs for a particular army.
    if (armyname.ostheerunits){
      var chosenUnit =  e.target.elements.ostheerunits.value.toString();
      this.setState((prevState) => {
        return {OW: 0, Ostheer: prevState.Ostheer + 1, SU: 0, UKF: 0, USA: 0, steps: prevState.steps + 1, [unitNumber]: chosenUnit, currentunit: [unitNumber]};
      })
      console.log('The Ostheer state count is: ' + this.state.Ostheer)
    }
    if (armyname.owunits){
      var chosenUnit =  e.target.elements.owunits.value.toString();
      this.setState((prevState) => {
        return {OW: prevState.OW + 1, Ostheer: 0, SU: 0, UKF: 0, USA: 0, steps: prevState.steps + 1, [unitNumber]: chosenUnit};
      })
      console.log('The Oberkommando West state count is: ' + this.state.OW)
    }
    if (armyname.suunits){
      var chosenUnit =  e.target.elements.suunits.value.toString();
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: prevState.SU + 1, UKF: 0, USA: 0, steps: prevState.steps + 1, [unitNumber]: chosenUnit, currentunit: [unitNumber]};
      })
      console.log('The Soviet Union state count is: ' + this.state.SU)
    }
    if (armyname.ukfunits != null){
      var chosenUnit =  e.target.elements.ukfunits.value.toString();
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: prevState.UKF + 1, USA: 0, steps: prevState.steps + 1, [unitNumber]: chosenUnit, currentunit: [unitNumber]};
      })
      console.log('The UKF state count is: ' + this.state.UKF)
    }
    if (armyname.usaunits){
      var chosenUnit =  e.target.elements.usaunits.value.toString();
      this.setState((prevState) => {
        return {OW: 0, Ostheer: 0, SU: 0, UKF: 0, USA: prevState.USA + 1, steps: prevState.steps + 1, [unitNumber]: chosenUnit, currentunit: [unitNumber]};
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
          <div>
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
          </div>
          <div  className='div-fixed'>
            {this.state.steps > 0 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit1]} unit={this.state.unit1} /> : null}
            {this.state.steps > 1 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit2]} unit={this.state.unit2} /> : null}
            {this.state.steps > 2 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit3]} unit={this.state.unit3} /> : null}
            {this.state.steps > 3 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit4]} unit={this.state.unit4} /> : null}
            {this.state.steps > 4 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit5]} unit={this.state.unit5} /> : null}
            {this.state.steps > 5 ? <ImgOutput steps = {this.state.steps} imgurl = {this.state[this.state.unit6]} unit={this.state.unit6} /> : null}
          </div>
          {/* <button onClick={this.genOrder}>Click here to generate Build Order text and image</button> */}

        </div>
        )
    }
}

class UKFInput extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
        return (
            <div>
                <form onSubmit={this.props.nextStep}>
                    <input type="text" name="quantity" placeholder="Create how many?"/>
                    <select name="ukfunits" id="ukfunits">
                      <option value=".55 cal Armor-Piercing Sniper">.55 cal Armor-Piercing Sniper</option>
                      <option value="AEC">AEC</option>
                      <option value="Assault Infantry">Assault Infantry</option>
                      <option value="Assault Officer">Assault Officer</option>
                      <option value="Commandos">Commandos</option>
                      <option value="Engineer Recovery Squad">Engineer Recovery Squad</option>
                      <option value="Royal Engineers">Royal Engineers</option>
                      <option value="Infantry Squad">Infantry Squad</option>
                      <option value="M1 81mm Mortar Team">M1 81mm Mortar Team</option>
                      <option value="QF 6-pounder AT gun">QF 6-pounder AT gun</option>
                      <option value="Tank Hunter Infantry">Tank Hunter Infantry</option>
                      <option value="Universal Carrier">Universal Carrier</option>
                      <option value="Vickers Heavy Machine Gun">Vickers Heavy Machine Gun</option>
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
                    <option value="Ambulance">Ambulance</option>
                    <option value="Assault Engineers">Assault Engineers</option>
                    <option value="Captain">Captain</option>
                    <option value="Lieutenant">Lieutenant</option>
                    <option value="M1 57mm AT gun">M1 57mm AT gun</option>
                    <option value="M15A1 AA Half-track">M15A1 AA Half-track</option>
                    <option value="M20 Utility Car">M20 Utility Car</option>
                    <option value="M2HB .50 cal Machine Gun">M2HB .50 cal Machine Gun</option>
                    <option value="M5A1 Stuart">M5A1 Stuart</option>
                    <option value="Mortar Team">Mortar Team</option>
                    <option value="Pack Howitzer">Pack Howitzer</option>
                    <option value="Pathfinders">Pathfinders</option>
                    <option value="Rangers">Rangers</option>
                    <option value="Rear Echelon">Rear Echelon</option>
                    <option value="Rifleman">Rifleman</option>
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
                    <option value="Combat Engineers">Combat Engineers</option>
                    <option value="Conscripts">Conscripts</option>
                    <option value="Guards Infantry">Guards Infantry</option>
                    <option value="M1910 Maxim Machine Gun">M1910 Maxim Machine Gun</option>
                    <option value="M3A1 Scout Car">M3A1 Scout Car</option>
                    <option value="M5 Half-track">M5 Half-track</option>
                    <option value="Penal Battalion">Penal Battalion</option>
                    <option value="PM-41 82mm Mortar Team">PM-41 82mm Mortar Team</option>
                    <option value="HM38 120mm Mortar Team">HM38 120mm Mortar Team</option>
                    <option value="Scout Sniper">Scout Sniper</option>
                    <option value="Shock Infantry">Shock Infantry</option>
                    <option value="SU-76M Assault Gun">SU-76M Assault Gun</option>
                    <option value="T-70 Light Tank">T-70 Light Tank</option>
                    <option value="ZiS-3 76mm Divisional Field Gun">ZiS-3 76mm Divisional Field Gun</option>
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
                    <option value="Grenadiers">Grenadiers</option>
                    <option value="GrW 34 Mortar Team">GrW 34 Mortar Team</option>
                    <option value="MG42 Machine Gun">MG42 Machine Gun</option>
                    <option value="Pak 40 AT Gun">Pak 40 AT Gun</option>
                    <option value="Panzergrenadiers">Panzergrenadiers</option>
                    <option value="Pioneers">Pioneers</option>
                    <option value="SdKfz 222 Scout Car">SdKfz 222 Scout Car</option>
                    <option value="SdKfz 250/7 Mortar Half-track">SdKfz 250/7 Mortar Half-track</option>
                    <option value="SdKfz 250 Half-track">SdKfz 250 Half-track</option>
                    <option value="SdKfz 251 Half-track">SdKfz 251 Half-track</option>
                    <option value="Ostheer Sniper">Ostheer Sniper</option>
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
                    <option value="7.5cm le.IG Infantry Support Gun">7.5cm le.IG Infantry Support Gun</option>
                    <option value="Kubelwagon">Kubelwagon</option>
                    <option value="Panzer II Luchs">Panzer II Luchs</option>
                    <option value="Raktenwerfer">Raktenwerfer</option>
                    <option value="Sd.Kfz 221 Scout Car">Sd.Kfz 221 Scout Car</option>
                    <option value="SdKfz 234 Puma Armored Car">SdKfz 234 Puma Armored Car</option>
                    <option value="SdKfz 251 Stuka Half-track">SdKfz 251 Stuka Half-track</option>
                    <option value="SdKfz 251/17 Flak Half-track">SdKfz 251/17 Flak Half-track</option>
                    <option value="SdKfz 251/20 Infrared Half-track">SdKfz 251/20 Infrared Half-track</option>
                    <option value="Sturmpioneers">Sturmpioneers</option>
                    <option value="sWS Supply Half-track">sWS Supply Half-track</option>
                    <option value="Volksgrenadiers">Volksgrenadiers</option>
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
    <div  className='div-fixed'>
      <div>
        <h3>{this.props.unit}</h3>
          <img src={this.props.imgurl} />
      </div>
      <div className='bullet'>{this.props.steps > 1 ? <img src='https://i.imgur.com/FXmXMtn.png' /> : null}</div>
    </div>
  )}

  }

ReactDOM.render(<ParentApp />,document.getElementById('app'))
