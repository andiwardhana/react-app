import React from 'react';
import '../Hooks/Hooks.css';

class Controlled extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            gaji:'',
            tgl:'',
            jeniskelamin:'',
            skills:[],
            
            alamat:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPick = this.onPick.bind(this);
    }   
    onSubmit(event){
       // var form = document.getElementById("test");
       // alert(form.elements["test"].value);
       alert(`Namaku adalah ${this.state.name} gajiku sebesar ${this.state.gaji} tanggal masuk ${this.state.tgl}jenis kelaminku ${this.state.jeniskelamin} Keahlianku adalah${this.state.skills} Alamatku di${this.state.alamat}`);
       //console.log(`Namaku adalah ${this.state.name} pekerjaanku sebagai ${this.state.gaji}`);
       
       event.preventDefault(); 
    }

    onChange (event){
        const {name, value} = event.target;
        //this.setState({name: event.target.value})
        this.setState({[name]: value})
    }

    onPick (event){
        let skills = [...this.state.skills];
        let idx = skills.findIndex(elemen => event.target.value === elemen);
        if (idx>0){
            skills = [...skills.slice(0, idx), ...skills.slice(idx + 1, skills.length)]
        } else  if (idx === 0){
            skills = [...skills.slice(idx + 1, skills.length)]
        }else{
            skills.push(event.target.value)
        }
        console.log(skills);
        
       this.setState({skills});
        
    }
    render(){
        const{ name, gaji, tgl, jeniskelamin, skills, alamat }= this.state;
        return (
            
            <div className="container" >
                <form onSubmit={this.onSubmit} style={{display: 'flex', flexDirection: 'column'}} >
                    <div className="row">
                        <div className="col-25">
                            <label>Name :</label>
                        </div>
                        <div className="col-75">
                            <input name ="name" type ="text" value={name} onChange={this.onChange}/>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-25">
                            <label>Gaji :</label>
                        </div>
                        <div className="col-75">
                            <input name ="gaji" type ="number" value={gaji} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label>Tanggal Masuk Kerja :</label>
                        </div>
                        <div className="col-75">
                            <input name ="tgl" type ="date" value={tgl} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Jenis Kelamin:</label>
                        </div>
                        <div className="col-75">
                            <input type="radio" id ="male" name="jeniskelamin" value={jeniskelamin} onChange={this.onChange}/>
                            <label for="male">Laki-Laki</label>
                        </div>
                        <div className="col-755">
                            <input type="radio" id="female" name="jeniskelamin" value={jeniskelamin} onChange={this.onChange}/>
                            <label for="female">Perempuan</label>
                        </div>
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-25">
                            <label>Skills:</label>
                        </div>
                        <div className="col-25">
                                <select multiple value={skills} onChange={this.onPick}>
                                    <option value="sepakbola">Sepak Bola</option>
                                    <option value="beladiri">Bela Diri</option>
                                    <option value="coding">Coding</option>
                                    <option value="desain">Desain</option>
                                </select>
                        </div>
                    </div>       
                   
                    <div className="row">
                        <div className="col-25">
                            <label>Alamat</label>
                        </div>
                        <div className="col-75">
                            <textarea name="alamat" value={alamat} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </div>



        );
    }
  
  }

export default Controlled;