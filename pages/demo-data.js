/* CashConnect interview demo data.
   Creates sample data only when the browser has no saved app data.
   All names, contact details and financial amounts below are fictional. */
(function () {
    const demoUsers = [
        {
            id: "demo-1001", name: "Halima Demo", email: "demo@cashconnect.com",
            password: "demo12345", number: "9000000001",
            address: { house: "12", street: "Anna Nagar", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600040" },
            city: "Chennai", state: "Tamil Nadu", role: "Card Holder",
            carddetails: { bankName: "HDFC Bank", cardType: "Visa", last4: "4821", creditLimit: 85000 }
        },
        {
            id: "demo-1002", name: "Arun Kumar", email: "arun.demo@cashconnect.com",
            password: "demo12345", number: "9000000002",
            address: { house: "8", street: "Velachery Main Road", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600042" },
            city: "Chennai", state: "Tamil Nadu", role: "Cash Holder",
            cashdetails: { availableAmount: 45000 }
        },
        {
            id: "demo-1003", name: "Priya Sharma", email: "priya.demo@cashconnect.com",
            password: "demo12345", number: "9000000003",
            address: { house: "21", street: "OMR", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600096" },
            city: "Chennai", state: "Tamil Nadu", role: "Card Holder",
            carddetails: { bankName: "ICICI Bank", cardType: "MasterCard", last4: "1934", creditLimit: 120000 }
        },
        {
            id: "demo-1004", name: "Vikram Raj", email: "vikram.demo@cashconnect.com",
            password: "demo12345", number: "9000000004",
            address: { house: "5", street: "Tambaram East", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600059" },
            city: "Chennai", state: "Tamil Nadu", role: "Cash Holder",
            cashdetails: { availableAmount: 72000 }
        },
        {
            id: "demo-1005", name: "Meena Lakshmi", email: "meena.demo@cashconnect.com",
            password: "demo12345", number: "9000000005",
            address: { house: "14", street: "Porur", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600116" },
            city: "Chennai", state: "Tamil Nadu", role: "Card Holder",
            carddetails: { bankName: "SBI", cardType: "RuPay", last4: "7620", creditLimit: 65000 }
        },
        {
            id: "demo-1006", name: "Karthik S", email: "karthik.demo@cashconnect.com",
            password: "demo12345", number: "9000000006",
            address: { house: "32", street: "Guindy", city: "Chennai", district: "Chennai", state: "Tamil Nadu", pincode: "600032" },
            city: "Chennai", state: "Tamil Nadu", role: "Cash Holder",
            cashdetails: { availableAmount: 30000 }
        }
    ];

    const today = new Date();
    const dateLabel = today.toLocaleDateString("en-IN");
    const demoRequests = [
        {
            id: 91001, userEmail: "arun.demo@cashconnect.com", userName: "Arun Kumar",
            requestType: "Card", requestMode: "public", amount: "12000",
            reason: "Emergency medical expense", description: "Need temporary credit card support for a family medical bill. Can share the bill and discuss repayment details.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "HDFC Bank",
            address: demoUsers[1].address, number: demoUsers[1].number
        },
        {
            id: 91002, userEmail: "priya.demo@cashconnect.com", userName: "Priya Sharma",
            requestType: "Cash", requestMode: "public", amount: "18000",
            reason: "Education fees", description: "Looking for cash assistance to complete my course fee payment. Available to meet in Chennai.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "ICICI Bank",
            address: demoUsers[2].address, number: demoUsers[2].number,
            carddetails: demoUsers[2].carddetails
        },
        {
            id: 91003, userEmail: "vikram.demo@cashconnect.com", userName: "Vikram Raj",
            requestType: "Card", requestMode: "public", amount: "8000",
            reason: "Travel booking", description: "Requesting card support for a planned travel booking. I can provide the required details and discuss terms.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "SBI",
            address: demoUsers[3].address, number: demoUsers[3].number
        },
        {
            id: 91004, userEmail: "demo@cashconnect.com", userName: "Halima Demo",
            requestType: "Cash", requestMode: "public", amount: "15000",
            reason: "Laptop purchase", description: "Need cash support towards a laptop purchase for learning and project development. Happy to discuss a suitable repayment plan.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "HDFC Bank",
            address: demoUsers[0].address, number: demoUsers[0].number,
            carddetails: demoUsers[0].carddetails
        },
        {
            id: 91005, userEmail: "meena.demo@cashconnect.com", userName: "Meena Lakshmi",
            requestType: "Cash", requestMode: "direct", receiverId: "demo-1001", amount: "10000",
            reason: "Household expense", description: "Requesting cash assistance for an urgent household expense. Please let me know if you are available.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "SBI",
            address: demoUsers[4].address, number: demoUsers[4].number
        },
        {
            id: 91006, userEmail: "demo@cashconnect.com", userName: "Halima Demo",
            requestType: "Card", requestMode: "public", amount: "9000",
            reason: "Online purchase", description: "Sample request shown to demonstrate the sent requests page and request status tracking.",
            status: "Pending", createdAt: dateLabel, city: "Chennai", bankName: "HDFC Bank",
            address: demoUsers[0].address, number: demoUsers[0].number
        },
        {
            id: 91007, userEmail: "demo@cashconnect.com", userName: "Halima Demo",
            requestType: "Cash", requestMode: "public", amount: "6000",
            reason: "Project materials", description: "Sample accepted request to demonstrate the My Deals page. Meeting details are included below.",
            status: "Accepted", createdAt: dateLabel, city: "Chennai", bankName: "HDFC Bank",
            address: demoUsers[0].address, number: demoUsers[0].number,
            acceptedBy: { id: "demo-1002", name: "Arun Kumar", email: "arun.demo@cashconnect.com", number: demoUsers[1].number, address: demoUsers[1].address },
            meeting: { date: dateLabel, time: "4:30 PM", location: "Anna Nagar, Chennai", note: "Demo meeting details" }
        }
    ];

       // Merge demo users without deleting existing users
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const safeUsers = Array.isArray(existingUsers) ? existingUsers : [];

    const mergedUsers = [...safeUsers];

    demoUsers.forEach(demoUser => {
        if (!mergedUsers.some(user => user.email === demoUser.email)) {
            mergedUsers.push(demoUser);
        }
    });

    localStorage.setItem("users", JSON.stringify(mergedUsers));


    // Merge demo requests without duplicates
    const existingRequests = JSON.parse(localStorage.getItem("requests") || "[]");
    const safeRequests = Array.isArray(existingRequests) ? existingRequests : [];

    const mergedRequests = [...safeRequests];

    demoRequests.forEach(demoRequest => {
        if (!mergedRequests.some(request =>
            String(request.id) === String(demoRequest.id)
        )) {
            mergedRequests.push(demoRequest);
        }
    });

    localStorage.setItem("requests", JSON.stringify(mergedRequests));


    // Set default demo account
    if (!localStorage.getItem("loggedInUser")) {
        const demoAccount = mergedUsers.find(
            user => user.email === "demo@cashconnect.com"
        );

        if (demoAccount) {
            localStorage.setItem("loggedInUser", JSON.stringify(demoAccount));
        }
    }

})();