var username1 = localStorage.getItem("Player Name")
var username2 = localStorage.getItem("Player Name 2")
player1_score = ""
player2_score = ""
function send(){    
var n1 = document.getElementById("inputN1").value
var n2 = document.getElementById("inputN2").value 
answer = parseInt(n1) * parseInt(n2)
question_number = "<h4>" + n1 + "X" + n2 + "</h4>"
input_box = "<br>Answer: <input type = 'text' id = 'inputChkBox'>"
checkSumButton = "<br><br><button class = 'btn btn-info' onclick ='check()'>Check</button>"
row = question_number + input_box + checkSumButton
document.getElementById("output").innerHTML = row
document.getElementById("inputN1").value = ""
document.getElementById("inputN2").value = ""
}
var questionTurn = username1
var answerTurn = username2  
document.getElementById("questionTurn").innerHTML = "It is " + questionTurn + "'s turn to type in the question."
document.getElementById("answerTurn").innerHTML = "it is " + answerTurn + "'s turn to type in the answer."

function check(){
    
    get_answer = document.getElementById("inputChkBox").value;
    if(get_answer == answer)
    {
        if(answerTurn == username1){
            update_user1_score = player1_score +1
            document.getElementById("player1_score").innerHTML = username1 + "'s Score: " + update_user1_score
        }
        else{
            update_user2_score = player2_score +1
            document.getElementById("player2_score").innerHTML  = username2 + "'s Score: " +  update_user2_score
        }
    if(questionTurn == username1){
        questionTurn = username2
        document.getElementById("questionTurn").innerHTML = "It is " + questionTurn + "'s turn to type in the question."
    }
    else{
        questionTurn = username1
        document.getElementById("questionTurn").innerHTML = "It is " + questionTurn + "'s turn to type in the question."
    }
    if(answerTurn == username1){
        answerTurn = username2
        document.getElementById("answerTurn").innerHTML = "It is " + answerTurn + "'s turn to type in the answer"
    }
    else{
        answerTurn = username1
        document.getElementById("answerTurn").innerHTML = "It is " + answerTurn + "'s turn to type in the answer."
    }
document.getElementById("output").innerHTML = "Bang on! Correct answer."

}
if(get_answer != answer){

        if(answerTurn == username1){
            update_user1_score = player1_score - 1
            document.getElementById("player1_score").innerHTML = username1 + "'s Score: " + update_user1_score
        }
        else{
            update_user2_score = player2_score - 1
            document.getElementById("player2_score").innerHTML  = username2 + "'s Score: " +  update_user2_score
        }
    if(questionTurn == username1){
        questionTurn = username2
        document.getElementById("questionTurn").innerHTML = "It is " + questionTurn + "'s turn to type in the question."
    }
    else{
        questionTurn = username1
        document.getElementById("questionTurn").innerHTML = "It is " + questionTurn + "'s turn to type in the question."
    }
    if(answerTurn == username1){
        answerTurn = username2
        document.getElementById("answerTurn").innerHTML = "It is " + answerTurn + "'s turn to type in the answer"
    }
    else{
        answerTurn = username1
        document.getElementById("answerTurn").innerHTML = "It is " + answerTurn + "'s turn to type in the answer."
}
document.getElementById("output").innerHTML = "WHOOPSIES! Wrong answer. The Right answer is: " + answer 
} 
}
