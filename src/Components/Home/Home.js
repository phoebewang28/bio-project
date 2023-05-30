import React from 'react'
import '../Home/Home.css'
import dna from "../Images/dna-spiral.gif"

const Home = () => {

    function clickMe(){
        var seq = document.getElementById("nucleotide_seq").value.toLowerCase();
        var translatedSeq = "";
        var translatedAA="";
        var count = 0;
        for (var i = 0; i< seq.length; i++){
            if (seq.substring(i,i+1) in nucDict)
                translatedSeq+=nucDict[seq.substring(i,i+1)].toUpperCase();
            else{
                translatedSeq+="?";
                count++;
            }
        }

        document.getElementById("translate-nuc").innerHTML = translatedSeq;
        if (count > 0)
           { alert("You have inputted at least one invalid nucleotide!");
            document.getElementById("translate-mRNA").innerHTML = "Please fix your DNA code";}
        else {
            for (var i = 0; i+3<=seq.length; i+=3){

                var codon = translatedSeq.substring(i,i+3);
                for (const key in aminoacidDict){
                    if(aminoacidDict[key].includes(codon)){
                         translatedAA+=key+" ";
                    }
                }
            }

            document.getElementById("translate-mRNA").innerHTML = translatedAA;
    }
}

    var nucDict = {
        "t": "a",
        "a" : "u",
        "g" : "c",
        "c" : "g",
        " " : ""
    }
    
    var aminoacidDict = {
        "Ala":["GCU", "GCC", "GCA", "GCG"],
        "Arg":["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
        "Asn":["AAU", "AAC"],
        "Asp":["GAU", "GAC"],
        "Cys":["UGU", "UGC"],
        "Gln":["CAA", "CAG"],
        "Glu":["GAA", "GAG"],
        "Gly":["GGU", "GGC", "GGA", "GGG"],
        "His":["CAU", "CAC"],
        "START":["AUG"],
        "Ile":["AUU", "AUC", "AUA"],
        "Leu":["CUU", "CUC", "CUA", "CUG"],
        "Lys":["AAA", "AAG"],
        "Met":["AUG"],
        "Phe":["UUU", "UUC"],
        "Pro":["CCU", "CCC", "CCA", "CCG"],
        "Ser":["UCU", "UCC", "UCA", "UCG"],
        "Thr":["ACU", "ACC", "ACA", "ACG"],
        "Trp":["UGG"],
        "Tyr":["UAU", "UAC"],
        "Val":["GUU", "GUC", "GUA", "GUG"],
        "STOP":["UAA", "UGA", "UAG"]

    }


    return (
        <>
            <div className='full-app'>
                <div className='logo'>
                    <img src={dna}/>
                    <h1>Gene Coding</h1>
                </div>

                <div className="doing-stuff">
                
                    <div className="text">
                        <section>
                            <h2>
                                DNA to RNA (Transcription)
                            </h2>
                            <p id="translate-nuc">
                                Nucleotide Sequence Will Appear Here
                            </p>
                        </section>
                        <section>
                            <h2>
                                mRNA to Amino Acids (Translation)
                            </h2>
                            <p id="translate-mRNA">
                                Amino Acid Sequence Will Appear Here
                            </p>
                        </section>
                    </div>

                    <div>
                        <input className="input-box" type='text' id='nucleotide_seq' placeholder='Enter Nucleotide Sequence'>
                        </input>

                        <p></p>

                        <button onClick={clickMe}>
                            Click Me!
                        </button>

                    </div>
                </div>
            </div>
        </>

    
    )
}

export default Home;