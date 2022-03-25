$('li').on('click', function(){
    $('li').removeClass('active');
    $(this).toggleClass('active');
 })

var c1=["Select one","Dry","Cooked"];
var c2=["Select one","Store-bought","Homemade"];
var c3=["Select one","Cooked","unopened","opened"];
var c4=["Select one","Fresh","Cooked"];
var c5=["No select"];
var c6=["No select"];
var c7=["No select"];
var c8=["Select one","Peeled","Sliced or cut"];
var c9=["Select one","Carrots","Baby carrots"];
var c10=["No select"];
var c11=["No select"];
var c12=["No select"];
var c13=["No select"];
var c14=["No select"];
var c15=["No select"];
var c16=["Select one","Opened","Unopened"];
var c17=["No select"];
var c18=["No select"];
var c19=["Select one","Raw fish/Shellfish","Cooked","Frozen cooked","Frozen raw fish","Frozen shellfish"];
var c20=["No select"];
var c21=["Select one","Hard cheese","Medium cheese","Soft cheese"];
var c22=["No select"];
var c23=["Select one","Opened","Unopened"];
var c24=["No select"];
var subIngre=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24];

function onIngreChanged(s){
    var Ingre_option = document.getElementById("select-sub-ingre");
    if (s.value>0){
        var v="";
        for(var i=0;i<subIngre[s.value-1].length;i++){
            v+="<option value='" + i + "'>"+subIngre[s.value-1][i]+"</option>"
        }
        Ingre_option.innerHTML=v;
    } else {
        Ingre_option.innerHTML="";
    }
 }

function formSubmit() {
    var demo = document.getElementById('expired_date');
    var d = document.getElementById('start_date').value;
    var date = new Date (d);
    var date2 = new Date(d);

    var theForm = document.forms["calculate-form"];
    var selectedIngre ="";
    var selectedTemp ="";
    var selectedSubIngre="";
    if(theForm){
        selectedIngre = theForm.elements["selectIngre"].value;
        selectedTemp = theForm.elements["select-temp"].value;
        selectedSubIngre = theForm.elements["select-sub-ingre"].value;
    }
    var i1=0,i2=0;
    //thực phẩm được để trong i1-i2 ngày hoặc để trong i1 ngày
    var notRecommend=0;
    //notRecommend = 1 khi không được và =2 khi để đc trong 2 giờ
    //khi i1=0,i2=0, notRecommend=0 thì không có dữ liệu hoặc chưa xử lí được dữ liệu
    if(selectedIngre==1){
        if(selectedTemp==1){
            if(selectedSubIngre==2){
                i1=3;
                i2=4; 
            }else if(selectedSubIngre==1){
                notRecommend=1;
            } 
        } else if (selectedTemp ==2){
            if(selectedSubIngre==1){
                i1=365;
                i2=365*2; 
            }else if(selectedSubIngre==2){
                notRecommend=2;
            }
        } 
    } else if(selectedIngre==2){
        if(selectedTemp==1){
            i1=3;i2=5;
        } else if(selectedTemp==2){
            if(selectedSubIngre==1){
                i1=7;
            } else if(selectedSubIngre==2){
                i1=3;i2=4;
            }
        }
    } else if(selectedIngre==3){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=4;i2=5;
            }
        } else if(selectedTemp==2){
            if(selectedSubIngre==2){
                i1=6*30;i2=8*30;
            } else if(selectedSubIngre==3){
                i1=4*30;i2=6*30;
            }
        }
    } else if(selectedIngre==4){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=10;
            } else if(selectedSubIngre==2){
                i1=7;i2=10;
            }
        } else if(selectedTemp==2){
            if(selectedSubIngre==1){
                i1=7;
            }
        }
    } else if(selectedIngre==5){
        if(selectedTemp==1){
            i1=3;i2=5;
        } else if(selectedTemp==2){
            i1=1;i2=2;
        }
    } else if(selectedIngre==6){
        
    } else if(selectedIngre==7){
        if(selectedTemp==1){
            i1=14;
        } else if(selectedTemp==2){
            i1=7;
        }
    } else if (selectedIngre==8){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=10;i2=14;
            } else if(selectedSubIngre==2){
                i1=7;i2=10;
            }
        } else if(selectedTemp==2){
            //Bulbs should dry evenly without spoiling within 2-3 weeks
        }
    } else if (selectedIngre==9){
        if(selectedTemp==2){
            if(selectedSubIngre==1){
                i1=4;i2=5;
            }
            if(selectedSubIngre==2){
                i1=2;
            }
        }
    } else if(selectedIngre==10){
        if(selectedTemp==1){
            i1=4;i2=7;
        } else if(selectedTemp==2){
            i1=2;i2=4;
        }
    } else if(selectedIngre==11){
        if(selectedTemp==1){
            i1=3*7;i2=2*30;
        } else if(selectedTemp==2){
            i1=7;i2=4*7;
        }
    } else if(selectedIngre==12){
        if(selectedTemp==1){
            i1=3;i2=5;
        } else if(selectedTemp==2){
            i1=2;
        }
    } else if(selectedIngre==13){
        if(selectedTemp==1){
            i1=10;i2=11;
        } else if(selectedTemp==2){
            i1=3;i2=4;
        }
    } else if(selectedIngre==14){
        if(selectedTemp==1){
            i1=1;i2=2;
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==15){
        if(selectedTemp==1){
            i1=3;i2=4;
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==16){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=3;i2=5; 
            } else if(selectedSubIngre==2){
                i1=14;
            }
        } else if(selectedTemp==2){
            notRecommend=2;
        }
    } else if(selectedIngre==17){
        if(selectedTemp==1){
            i1=3;i2=5;
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==18){
        if(selectedTemp==1){
            i1=3*7;i2=5*7;
        } else if(selectedTemp==2){
            i1=7;i2=10;
        }
    } else if(selectedIngre==19){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=1;i2=2;
            }else if(selectedSubIngre==2){
                i1=3;i2=4;
            } else if(selectedSubIngre==3){
                i1=3*30;
            } else if(selectedSubIngre==4){
                i1=3*30;i2=8*30;
            } else if(selectedSubIngre==5){
                i1=3*30;i2=365;
            }
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==20){
        if(selectedTemp==1){
            i1=7;
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==21){
        if(selectedTemp==1){
            
        } else if(selectedTemp==2){
            notRecommend=1;
        }
    } else if(selectedIngre==22){
        
    } else if(selectedIngre==23){
        if(selectedTemp==1){
            if(selectedSubIngre==1){
                i1=5;i2=7;
            }
        } else if(selectedTemp==2){
            if(selectedSubIngre==2){
                i1=12*30;i2=18*30;
            }
        }
    } else if(selectedIngre==24){
        if(selectedTemp==1){
            i1=1;
        } else if(selectedTemp==2){
            notRecommend=2;
        }
    }
    
    date.setDate(date.getDate() +i1);
    date2.setDate(date.getDate() +i2);
    
    if(i2){
        demo.innerHTML ="THE EXPIRED DATE IS ABOUT " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() 
        + " TO " +(date2.getMonth()+1) + "/" + date2.getDate() + "/" + date2.getFullYear();
    } else if(i1){
        demo.innerHTML ="THE EXPIRED DATE IS ABOUT " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    } else if(notRecommend==1){
        demo.innerHTML="NOT RECOMMENDED!";
    } else if(notRecommend==2){
        demo.innerHTML="NOT RECOMMENDED, COULD BE USED IN 2 HOURS";
    } else {
        demo.innerHTML = "NO DATA";
    }
 }
console.log(firebase)