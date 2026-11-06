
let currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {
    window.location.href = "../index.html";
}


loadUser();
document.getElementById("bUserName").innerText = currentUser.name;

function toggleNotification() {

    document
        .getElementById("notificationDropdown")
        .classList.toggle("hidden");
}


function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

const customMenu = () => {
    document.getElementById("customList").classList.toggle("hidden");
}

const browseRequestFun = () => {
    window.location.href = "browserequest.html"
}
function logoutFun() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "../index.html";

}

const popUp = () => {
    document.getElementById("requestPopup").classList.remove("hidden")
}
const closePopup = () => {
    document.getElementById("requestPopup").classList.add("hidden")
}

function loadUser() {

    let userDb = JSON.parse(localStorage.getItem("users")) || [];


    // Card Holders
    let cardUsers = userDb
        .filter(user => user.role === "Card Holder")
        .slice(-4).reverse();


    // Cash holders 
    let cashUsers = userDb
        .filter(user => user.role === "Cash Holder")
        .slice(-4)
        .reverse();

    let cardContainer = document.getElementById("cardHoldersCards");
    let cashContainer = document.getElementById("cashHoldersCards");
    const descriptions = [
        "Helping users with trusted financial support.",
        "Providing secure financial assistance whenever needed.",

        "Making financial support simple and accessible.",

        "Helping users with available credit when it matters most.",

        "Supporting people through reliable financial connections.",

        "Empowering people through trusted financial partnerships"
    ];
    cardContainer.innerHTML = "";
    cashContainer.innerHTML = "";


    cardUsers.forEach((user, index) => {

        let description = descriptions[index % descriptions.length];
        let card = `

    <div class="backdrop-blur-xl border border-black/20 shadow-xl rounded-3xl p-5 border w-[290px]">
        <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-start items-start">
            <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex justify-center items-center text-xl">
                ${user.name.charAt(0)}
            </div>

            <div class="">
                <h2 class="font-semibold text-lg">${user.name}</h2>
                <p class="text-gray-500 text-sm">${user.city}, ${user.state}</p>
            </div>

        </div>
        <div>
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-medium border border-emerald-400/20">
    <span class="w-2 h-2 rounded-full bg-emerald-800 animate-pulse"></span>
    Available
</span>
        </div>
        </div>

        <div class="mt-4 bg-gray-100 rounded-xl rounded p-1">
        <p>Available Credit :</p>
            <p class="text-emerald-600 text-2xl p-2"> ₹ ${user.carddetails.creditLimit}</p>
        </div>

        <div >
        <p class="p-1 text-gray-500 text-sm">${description}</p>
        </div>

        
        <div class="flex w-full justify-end ">
        <button onclick="viewDetails('${user.id}')" class="bg-emerald-600 text-white hover:scale-110 transition transform  rounded-xl p-3 "> View Details </button>
        </div>

    </div>
`;

        cardContainer.innerHTML += card;

    });

    const cashdescriptions = [
        "Providing cash support when it matters most.",
        "Helping people with reliable cash assistance.",
        "Ready to support genuine financial needs.",
        "Offering trusted cash support to the community.",
        "Making financial help simple and accessible.",
        "Committed to helping through secure cash support.",
        "Supporting people with available cash assistance.",
        "Here to provide reliable financial support.",
        "Helping users through trusted cash assistance.",
        "Available to support genuine cash requirements."
    ];


    cashUsers.forEach((user, index) => {

        let description = cashdescriptions[index % cashdescriptions.length];
        let card = `

    <div class="bg-white backdrop-blur-xl border border-black/20 shadow-xl rounded-3xl p-5 border w-[290px]">
        <div class="flex justify-between items-center">
        <div class="flex gap-2 justify-start items-start">
            <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex justify-center items-center text-xl">
                ${user.name.charAt(0)}
            </div>

            <div class="">
                <h2 class="font-semibold text-lg">${user.name}</h2>
                <p class="text-gray-500 text-sm">${user.city}, ${user.state}</p>
            </div>

        </div>
        <div>
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-medium border border-emerald-400/20">
    <span class="w-2 h-2 rounded-full bg-emerald-800 animate-pulse"></span>
    Available
</span>
        </div>
        </div>

        <div class="mt-4 bg-gray-100 rounded-xl rounded p-1">
        <p>Available Cash :</p>
            <p class="text-emerald-600 text-2xl p-2"> ₹ ${user.cashdetails.availableAmount}</p>
        </div>

        <div >
        <p class="p-1 text-gray-500 text-sm">${description}</p>
        </div>

        
        <div class="flex w-full justify-end ">
        <button onclick="viewDetails('${user.id}')" class="bg-emerald-600 text-white hover:scale-110 transition transform  rounded-xl p-3 "> View Details </button>
        </div>

    </div>
`;

        cashContainer.innerHTML += card;

    });
}

const viewDetails = (id) => {

    localStorage.setItem("selectedUserId", id);
    console.log(id);

    window.location.href = "view-details.html";
}

function submitRequest() {

    let requestType = document.querySelector('input[name="requestType"]:checked');

    if (!requestType) {

        alert("Select Request Type");

        return;

    }

    let amount = document.getElementById("amount").value;

    let reason = document.getElementById("reason").value;

    let description = document.getElementById("description").value;

    if (amount == "" || reason == "" || description == "") {

        alert("Fill all fields");

        return;

    }

    if (requestType.id == "cashRequest") {

        if (!currentUser.carddetails) {

            let bank = document.getElementById("bankName").value;

            let type = document.getElementById("cardType").value;

            let last4 = document.getElementById("last4").value;

            let limit = document.getElementById("creditLimit").value;

            if (bank == "" || type == "" || last4 == "" || limit == "") {

                alert("Fill Card Details");

                return;

            }
            else {
                currentUser.carddetails = {
                    bankName: bank,
                    cardType: type,
                    last4: last4,
                    creditLimit: limit
                }
                localStorage.setItem("loggedInUser", JSON.stringify(currentUser));

                let userDb = JSON.parse(localStorage.getItem("users"));

                let index = userDb.findIndex(
                    e => e.email === currentUser.email
                );

                userDb[index] = currentUser;

                localStorage.setItem(
                    "users",
                    JSON.stringify(userDb)
                );
            }
        }

    }
    let requestDb = JSON.parse(localStorage.getItem("requests")) || [];

    let request = {
        id: Date.now(),
        userEmail: currentUser.email,
        userName: currentUser.name,
        requestType: requestType.id == "cardRequest" ? "Card" : "Cash",
        requestMode: "public",
        amount: amount,
        reason: reason,
        description: description,
        status: "Pending",
        createdAt: new Date().toLocaleString(),
        address: currentUser.address,
        number: currentUser.number
    };

    if (requestType.id == "cashRequest") {
        request.carddetails = currentUser.carddetails;
    }

    requestDb.push(request);

    localStorage.setItem("requests", JSON.stringify(requestDb));
    
    document.getElementById("requestPopup").classList.add("hidden");
    alert("Request Submitted");
    loadRecentRequests();
}

function showCardForm() {
    if (currentUser.carddetails) {

        // Already card details irukku
        document.getElementById("cardForm").classList.add("hidden");
        document.getElementById("common").classList.remove("hidden");
        document.getElementById("submit").classList.remove("hidden");
        document.getElementById("next").classList.add("hidden");
    } else {

        // First time user
        document.getElementById("cardForm").classList.remove("hidden");
        document.getElementById("common").classList.add("hidden");
        document.getElementById("submit").classList.add("hidden");
        document.getElementById("next").classList.remove("hidden");

    }
}

function showCashForm() {
    document.getElementById("cardForm").classList.add("hidden");
    document.getElementById("common").classList.remove("hidden")
    document.getElementById("submit").classList.remove("hidden")
    document.getElementById("next").classList.add("hidden")
}

let users = JSON.parse(localStorage.getItem("users")) || [];
let requests = JSON.parse(localStorage.getItem("requests")) || [];

document.getElementById("totalUsers").innerText = users.length;

document.getElementById("cardUsers").innerText =
    users.filter(user => user.role === "Card Holder").length;

document.getElementById("cashUsers").innerText =
    users.filter(user => user.role === "Cash Holder").length;

document.getElementById("activeRequests").innerText =
    requests.filter(req => req.status === "Accepted").length;
