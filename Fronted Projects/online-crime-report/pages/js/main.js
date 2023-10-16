var firtype3
$(document).ready(async function (req, res) {
    var getObj = await getCookie();
    if (window.location.pathname == '/registerFir') {
        
        var firtype3 = localStorage.getItem("firType")
        console.log("Firtype" + firtype3)

        // console.log(getObj)
        // $('#inputName').val(getObj.user.name)
        // $('#inputNumber').val(getObj.user.mobno)
        // $('#inputFirType').val(firtype3)

    }
    if (window.location.pathname == '/userDetails') {
        console.log("userId" + getObj.user.userid)
        $.ajax({
            url: "/crime/status",
            type: 'POST',
            data: JSON.stringify({
                status: "UNSOLVED",
                uid: getObj.user.userid
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log("Response" + JSON.stringify(res))
                if (res.success) {
                    console.log("length" + res.data.length)
                    var data = res.data
                    for (i = 0; i < res.data.length; i++) {
                        $('#complaints').append(
                            '<div class="card mb-2">' +
                            '                <h5 class="card-header">' + data[i].firtype + '</h5>' +
                            '                <div class="card-body">' +
                            '                  <div class="row">' +
                            '                    <div class="col-6">' +
                            '                      date' +
                            '                    </div>' +
                            '                    <div class="col-6">' + data[i].date +
                            '                      </div>' +
                            '                  </div>' +
                            '                  <div class="row">' +
                            '                      <div class="col-6">' +
                            '                        place' +
                            '                      </div>' +
                            '                      <div class="col-6">' + data[i].place +
                            '                        </div>' +
                            '                    </div>' +
                            '                    <div class="row">' +
                            '                        <div class="col-6">' +
                            '                          Address' +
                            '                        </div>' +
                            '                        <div class="col-6">' + data[i].addr +
                            '                          </div>' +
                            '                      </div>' +
                            '                </div>' +
                            '              </div>'
                        )
                    }
                }
                else {
                    alert(res.message)
                }

            }
        })

        //InProgress

        $.ajax({
            url: "/crime/status",
            type: 'POST',
            data: JSON.stringify({
                status: "INPROGRESS",
                uid: getObj.user.userid
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log("Response" + JSON.stringify(res))
                if (res.success) {
                    console.log("length" + res.data.length)
                    var data = res.data
                    for (i = 0; i < res.data.length; i++) {
                        $('#inProgress').append(
                            '<div class="card mb-2">' +
                            '                <h5 class="card-header">' + data[i].firtype + '</h5>' +
                            '                <div class="card-body">' +
                            '                  <div class="row">' +
                            '                    <div class="col-6">' +
                            '                      date' +
                            '                    </div>' +
                            '                    <div class="col-6">' + data[i].date +
                            '                      </div>' +
                            '                  </div>' +
                            '                  <div class="row">' +
                            '                      <div class="col-6">' +
                            '                        place' +
                            '                      </div>' +
                            '                      <div class="col-6">' + data[i].place +
                            '                        </div>' +
                            '                    </div>' +
                            '                    <div class="row">' +
                            '                        <div class="col-6">' +
                            '                          Address' +
                            '                        </div>' +
                            '                        <div class="col-6">' + data[i].addr +
                            '                          </div>' +
                            '                      </div>' +
                            '                </div>' +
                            '              </div>'
                        )
                    }
                }
                else {
                    alert(res.message)
                }

            }
        })


        //SOLVED

        $.ajax({
            url: "/crime/status",
            type: 'POST',
            data: JSON.stringify({
                status: "SOLVED",
                uid: getObj.user.userid
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                console.log("Response" + JSON.stringify(res))
                if (res.success) {
                    console.log("length" + res.data.length)
                    var data = res.data
                    for (i = 0; i < res.data.length; i++) {
                        $('#solved').append(
                            '<div class="card mb-2">' +
                            '                <h5 class="card-header">' + data[i].firtype + '</h5>' +
                            '                <div class="card-body">' +
                            '                  <div class="row">' +
                            '                    <div class="col-6">' +
                            '                      date' +
                            '                    </div>' +
                            '                    <div class="col-6">' + data[i].date +
                            '                      </div>' +
                            '                  </div>' +
                            '                  <div class="row">' +
                            '                      <div class="col-6">' +
                            '                        place' +
                            '                      </div>' +
                            '                      <div class="col-6">' + data[i].place +
                            '                        </div>' +
                            '                    </div>' +
                            '                    <div class="row">' +
                            '                        <div class="col-6">' +
                            '                          Address' +
                            '                        </div>' +
                            '                        <div class="col-6">' + data[i].addr +
                            '                          </div>' +
                            '                      </div>' +
                            '                </div>' +
                            '              </div>'
                        )
                    }
                }
                else {
                    alert(res.message)
                }

            }
        })
    }

    if (window.location.pathname == '/admin') {
        $('#example').DataTable({
            paging: false,
            data: await getDetails(),
            columns: [
                { data: "name", title: "NAME", defaultContent: 'N/A' },
                { data: "place", title: "PLACE", defaultContent: 'N/A' },
                { data: "details", title: "DETAILS", defaultContent: 'N/A' },
                { data: "status", title: "STATUS", defaultContent: 'N/A' },
                { data: "police_status", title: "STATUS By POLICE", defaultContent: 'N/A' },

            ]

        });

    }

    if (window.location.pathname == '/verification') {
        var table = $('#example_verification').DataTable({
            paging: false,
            data: await getDetails(),
            columns: [
                { data: "name", title: "NAME", defaultContent: 'N/A' },
                { data: "place", title: "PLACE", defaultContent: 'N/A' },
                { data: "details", title: "DETAILS", defaultContent: 'N/A' },
                { data: "status", title: "STATUS", defaultContent: 'N/A' },
                { data: "police_status", title: "STATUS By POLICE", defaultContent: 'N/A' },
                { data: null, title: 'Actions' },
            ],
            "columnDefs": [{
                "targets": -1,
                "data": null,
                "defaultContent": `<button class="btn"><i class="fa fa-check"></i></button>
                <button class="btn"><i class="fa fa-check-circle"></i></button>`
            }]

        });

        $('#example_verification tbody').on('click', 'button', function () {

            var click = $(this).find('i').hasClass('fa-check')
            if (click) {
                var data2 = table.row($(this).parents('tr')).data();
                var data = {
                    data:data2,
                    status:"INPROGRESS"
                }
                $.ajax({
                    url: "/crime/insertStatus",
                    type: 'POST',
                    data: JSON.stringify(data),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (res) {
                        if (res.success) {
                            window.location.href = window.location.href
                        }
                        else {
                            alert(res.message)
                        }
            
                    }
                })

            }

        });

        $('#example_verification tbody').on('click', 'button', function () {

            var click = $(this).find('i').hasClass('fa-check-circle')
            if (click) {
                var data3 = table.row($(this).parents('tr')).data();
                console.log('data ', data3);

                var data = {
                    data:data3,
                    status:"SOLVED"
                }
                $.ajax({
                    url: "/crime/insertStatus",
                    type: 'POST',
                    data: JSON.stringify(data),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (res) {
                        if (res.success) {
                            window.location.href = window.location.href
                        }
                        else {
                            alert(res.message)
                        }
            
                    }
                })

            }

        });
    }
    if(window.location.pathname == '/police'){
        var table3 = $('#police_verification').DataTable({
            paging: false,
            data: await getDetails(),
            columns: [
                { data: "name", title: "NAME", defaultContent: 'N/A' },
                { data: "place", title: "PLACE", defaultContent: 'N/A' },
                { data: "details", title: "DETAILS", defaultContent: 'N/A' },
                { data: "status", title: "STATUS", defaultContent: 'N/A' },
                { data: "police_status", title: "STATUS By POLICE", defaultContent: 'N/A' },
                { data: null, title: 'Actions' },
            ],
            "columnDefs": [{
                "targets": -1,
                "data": null,
                "defaultContent": `<button class="btn"><i class="fa fa-check"></i></button>`
            }]


        });

        $('#police_verification tbody').on('click', 'button', function () {

            var click = $(this).find('i').hasClass('fa-check')
            console.log("click"+click)
            if (click) {
                var data2 = table3.row($(this).parents('tr')).data();
                console.log("hjfwyjgdqiywd"+data2)
                var data = {
                    data:data2,
                    status:"SOLVED"
                }
                $.ajax({
                    url: "/crime/policeStatus",
                    type: 'POST',
                    data: JSON.stringify(data),
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (res) {
                        if (res.success) {
                            window.location.href = window.location.href
                        }
                        else {
                            alert(res.message)
                        }
            
                    }
                })

            }

        });

    }
})

async function getDetails() {
    var data1
    await $.ajax({
        url: "/crime/getFirDetails",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log("Response" + JSON.stringify(res.data))
            if (res.success) {
                data1 = res.data
            }
            else {
                alert(res.message)
            }

        }
    })
    console.log("data1" + data1)
    return data1

}

function openLogin() {
    $('#modalLoginForm').modal('show')
}

function openSignUp() {
    $('#modalRegisterForm').modal('show')
    $('#modalLoginForm').modal('hide')
}

function signup() {
    var name = $('#orangeForm-name').val()
    var email = $('#orangeForm-email').val()
    var mobno = $('#orangeForm-mobnumber').val()
    var password = $('#orangeForm-pass').val()
    console.log(name, email, mobno, password)
    if (!name || !email || !mobno || !password) {
        alert("Please Enter All the details")
        return;
    }
    var data = {
        name: name,
        email: email,
        mobno: mobno,
        pass: password
    }
    console.log(data);

    $.ajax({
        url: "/auth/signup",
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            console.log("Response" + JSON.stringify(res))
            if (res.success) {
                alert(res.message)
            }
            else {
                alert(res.message)
            }

        }
    })
}

function login() {
    var email = $('#defaultForm-email').val()
    var password = $('#defaultForm-pass').val()
    // console.log(name,email,mobno,password)
    var data = {
        email: email,
        pass: password
    }
    console.log(data);

    $.ajax({
        url: "/auth/signin",
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if (res.success) {
                $('#modalLoginForm').modal('hide')
                alert("Logged IN")
                // window.location.href = '/userDetails'
            }
            else {
                alert(res.message)
            }

        }
    })
}

function register_fir() {
    // return      $('#verifyOtp').modal('show');

    var cat = $('#inputFirType').val()
    var name = $('#inputName').val()
    number = $('#inputNumber').val()
    var gender = $('#inputGender :selected').val()
    var city = $('#inputCity').val()
    var time = $('#inputTime').val()
    var date = $('#inputDate').val()
    var details = $('#inputDetails').val()
    var addr = $('#inputAddress').val()
    var userObj = getCookie()

    var register_fir = {
        firtype: cat,
        name: name,
        number: number,
        gender: gender,
        place: city,
        time: time,
        date: date,
        details: details,
        addr: addr,
        uid: userObj.user.userid,
        status: 'UNSOLVED'
    }

    $.ajax({
        url: "/crime/registerFir",
        type: 'POST',
        data: JSON.stringify(register_fir),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if (res.success) {
                window.location.href = '/userDetails'
            }
            else {
                alert(res.message)
            }

        }
    })

}

async function getCrimeDetails(value) {
    // var value = $('.card').attr('val')
    console.log("value" + value)
    localStorage.setItem("firType", value)
    // $('#inputFirType').attr('value')
    // console.log(val)
    if (document.cookie) {
        var userObj = await getCookie()
    }
    else {
        alert("Please Login To go ahead")
        return
    }
    if (userObj.user) {
        // console.log("dklsf"+$('#inputFirType').attr(['value']))
        window.location.href = '/registerFir'
    }
    else {
        alert("Please Login to go ahead")
    }

    // window.location.replace('/registerFir')
}

function getCookie() {
    var cookie = unescape(document.cookie)
    console.log("Cookie:" + cookie)
    // var user1 = cookie.split(';')
    var userO = cookie.split('=')
    console.log("Usero" + userO)
    var userObj = JSON.parse(userO[1])
    return userObj
}