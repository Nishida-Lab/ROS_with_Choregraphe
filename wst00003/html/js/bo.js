var monoflag =4

function b00_02()
	{
	document.getElementById("img01").src="p2.png";
	document.getElementById("img02").src="p2.png";
	document.getElementById("img03").src="p2.png";
	document.getElementById("img04").src="p2.png";

	
	document.getElementById("title").innerHTML="何を持ちますか？";
	document.getElementById("t01").innerHTML="1を持つ";
	document.getElementById("t02").innerHTML="2を持つ";
	document.getElementById("t03").innerHTML="3を持つ";
	document.getElementById("t04").innerHTML="4を持つ";
	
	document.getElementById("b01").onclick=b01_01;
	document.getElementById("b02").onclick=b01_02;
	document.getElementById("b03").onclick=b01_03;
	document.getElementById("b04").onclick=b01_04;

	switch (monoflag)
		{
		case 0:
		monoflag = 4;
		break;
		case 1:
		document.getElementById("img02").src="p0.png";
		document.getElementById("t02").innerHTML="";
		document.getElementById("b02").onclick=b01_00;
		case 2:
		document.getElementById("img03").src="p0.png";
		document.getElementById("t03").innerHTML="";
		document.getElementById("b03").onclick=b01_00;
		case 3:
		document.getElementById("img04").src="p0.png";
		document.getElementById("t04").innerHTML="";
		document.getElementById("b04").onclick=b01_00;
		case 4:
		break;
		}

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", "何を持ちますか");
    	});

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 1);
    	});

	}

function b00_03()
	{
	document.getElementById("img01").src="p0.png";
	document.getElementById("img02").src="p4.png";
	document.getElementById("img03").src="p5.png";
	document.getElementById("img04").src="p0.png";
	
	document.getElementById("title").innerHTML="全部片付けます、よろしいでしょうか？";
	document.getElementById("t01").innerHTML="";
	document.getElementById("t02").innerHTML="Yes";
	document.getElementById("t03").innerHTML="No";
	document.getElementById("t04").innerHTML="";
	
	document.getElementById("b02").onclick=b03_02;	
	document.getElementById("b03").onclick=b03_03;
	document.getElementById("b04").onclick=b00_00;

	mono = "9";
	hako = "9";

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", "全部かた付けます、よろしいでしょうか？");
    	});

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 3);
    	});
	}
	
	function tr01()
	{
	switch (mono)
		{
		case "1":
		mono_char="物１";
		break;
		case "2":
		mono_char="物２";
		break;
		case "3":
		mono_char="物３";
		break;
		case "4":
		mono_char="物４";
		break;
		}
		
	document.getElementById("img01").src="p0.png";
	document.getElementById("img02").src="p1.png";
	document.getElementById("img03").src="p1.png";
	document.getElementById("img04").src="p0.png";
	
	document.getElementById("title").innerHTML=mono_char+"をどこの箱にいれますか？";
	document.getElementById("t01").innerHTML="";
	document.getElementById("t02").innerHTML="一番の箱";
	document.getElementById("t03").innerHTML="二番の箱";
	document.getElementById("t04").innerHTML="";
	
	document.getElementById("b01").onclick=b00_00;
	document.getElementById("b02").onclick=b02_01;
	document.getElementById("b03").onclick=b02_02;
	document.getElementById("b04").onclick=b00_00;

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", mono_char+"をせんたくしましたね");
    	});

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 2);
    	});
	}
	
	function b01_01()
	{
	mono="1";
	tr01();
	}
	
	function b01_02()
	{
	mono="2";
	tr01();
	}
	
	function b01_03()
	{
	mono="3";
	tr01();
	}

	function b01_04()
	{
	mono="4";
	tr01();
	}

	function tr02()
	{
		switch (hako)
		{
		case "1":
		hako_char="箱１";
		break;
		case "2":
		hako_char="箱２";
		break;
		case "3":
		hako_char="箱３";
		break;
		}
		
	document.getElementById("img01").src="p0.png";
	document.getElementById("img02").src="p4.png";
	document.getElementById("img03").src="p5.png";
	document.getElementById("img04").src="p0.png";
	
	document.getElementById("title").innerHTML=mono_char+"を"+hako_char+"にいれます、よろしいでしょうか？";
	document.getElementById("t01").innerHTML="";
	document.getElementById("t02").innerHTML="Yes";
	document.getElementById("t03").innerHTML="No";
	
	document.getElementById("b02").onclick=b03_02;	
	document.getElementById("b03").onclick=b03_03;

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", mono_char+"を"+hako_char+"にいれます、よろしいでしょうか？");
    	});

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 3);
    	});
	}
	
	function b02_01()
	{
	hako="1";
	tr02();
	}
	
	function b02_02()
	{
	hako="2";
	tr02();
	}
	
	function b02_03()
	{
	hako="3";
	tr02();
	}
	
	function b03_02()
	{
	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", "しょうしょうおまちください");
    	});
	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forros", mono+hako);
    	});
	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 4);
    	});
	
	if(mono==9)
	{monoflag = 4;}
	else
	{monoflag--;}

	b03_03();
	}
	
	function b03_03()
	{

	document.getElementById("img02").src="p1.png";
	document.getElementById("img03").src="p1.png";
	document.getElementById("img04").src="p5.png";
	
	document.getElementById("title").innerHTML="何をしましょうか";
	document.getElementById("t02").innerHTML="ものを取ります";
	document.getElementById("t03").innerHTML="全部片付けます";
	document.getElementById("t04").innerHTML="リセット";
	
	document.getElementById("b02").onclick=b00_02;
	document.getElementById("b03").onclick=b00_03;
	document.getElementById("b04").onclick=Reset;

	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Formove", 1);
    	});

	}

	function Reset()
	{
	monoflag = 4;
	b03_03();
	session.service("ALMemory").done(function (ALMemory) {
    	ALMemory.raiseEvent("PepperQiMessaging/Forspeak", "リセットしました");
    	});
	} 
	

	function b00_00()
	{;
	}	
	function b01_00()
	{;
	}
