
$(function () {
    // side navbar
    var body = $('body');
    var sideBarOverlay = $('.sidebar-overlay');
    var sideBar = $('.sidebar');
    var sideBarClose = $('.sidebar__close');
    var sideBarTrigger = $('.sidebar-trigger');

    sideBarOverlay.click(function () {
        sideBarHide();
    });

    sideBarClose.click(function (e) {
        e.preventDefault();

        sideBarHide();
    });

    sideBarTrigger.click(function (e) {
        e.preventDefault();

        sideBarShow();
    });

    function sideBarShow() {
        body.addClass('overflow-y-hidden');
        sideBarOverlay.addClass('sidebar-overlay--active');
        sideBar.addClass('sidebar--active');
    }

    function sideBarHide() {
        body.removeClass('overflow-y-hidden');
        sideBarOverlay.removeClass('sidebar-overlay--active');
        sideBar.removeClass('sidebar--active');
    }

});

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["55", "70", "85", "100", "115", "130", "148"],
        datasets: [
            {
                label: "# of Votes",
                data: [1, 3, 7, 10, 5, 2, 1],
                backgroundColor: [
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                ],
                borderColor: [
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const atx = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(atx, {
    type: "bar",
    data: {
        labels: ["<5min", "10min", "20min", "30min", "40min", "50min", "50>min"],
        datasets: [
            {
                label: "# of Votes",
                data: [1, 3, 7, 10, 5, 2, 1],
                backgroundColor: [
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                    "#FFE715",
                ],
                borderColor: [
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                    "#000",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});