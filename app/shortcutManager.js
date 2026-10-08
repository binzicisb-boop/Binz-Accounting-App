const { globalShortcut, BrowserWindow } = require('electron');

function registerShortcuts() {

    const sendShortcutMessage = (message) => {
        const win = BrowserWindow.getFocusedWindow();
        if (win) {
            win.webContents.send('keyboard-shortcut-detected', message);
        }
    };

    // Dashboard: Shift+D
    globalShortcut.register('Shift+D', () => sendShortcutMessage('Dashboard'));

    // Account List: Alt+Shift+A
    globalShortcut.register('Alt+Shift+A', () => sendShortcutMessage('Account List'));

    // Create New Account: Alt+A
    globalShortcut.register('Alt+A', () => sendShortcutMessage('Create New Account'));

    // Settings: Shift+S
    globalShortcut.register('Shift+S', () => sendShortcutMessage('Settings'));

    // Reports: Shift+R
    globalShortcut.register('Shift+R', () => sendShortcutMessage('Reports'));

    // Create New Sale:Alt+S
    globalShortcut.register('Alt+S', () => sendShortcutMessage('Create New Sale'));

    // Sale List:  Alt+Shift+S
    globalShortcut.register(' Alt+Shift+S', () => sendShortcutMessage('Sale List'));

    // Create New Estimate: Alt+E
    globalShortcut.register('Alt+E', () => sendShortcutMessage('Create New Estimate'));

    // Estimate List: Alt+Shift+E
    globalShortcut.register('Alt+Shift+E', () => sendShortcutMessage('Estimate List'));

    // Create New Sale Order: Alt+O 
    globalShortcut.register('Alt+O', () => sendShortcutMessage('Create New Sale Order'));

    // Sale Order List: Alt+Shift+O
    globalShortcut.register('Alt+Shift+O', () => sendShortcutMessage('Sale Order List'));

    // Sale Return: Shift+V
    // globalShortcut.register('Shift+X', () => sendShortcutMessage('Sale Return'));

    // Create New Purchase: Alt+P
    globalShortcut.register('Alt+P', () => sendShortcutMessage('Create New Purchase'));

    // Purchase List: Shift+ALt+P
    globalShortcut.register('Shift+ALt+P', () => sendShortcutMessage('Purchase List'));

    // Create New Purchase Order: Alt+L
    globalShortcut.register('Alt+L', () => sendShortcutMessage('Create New Purchase Order'));

    // Purchase Order List: Shift+Alt+L
    globalShortcut.register('Shift+Alt+L', () => sendShortcutMessage('Purchase Order List'));

    // //Purchase Return: Shift+Z
    // globalShortcut.register('Shift+Z', () => sendShortcutMessage('Purchase Return'));

    // Create New Expense: Alt+Y
    globalShortcut.register('Alt+Y', () => sendShortcutMessage('Create New Expense'));

    // Expense List: Shift+Alt+Y
    globalShortcut.register('Shift+Alt+Y', () => sendShortcutMessage('Expense List'));

    // Payment List(Received): Alt+K
    globalShortcut.register('Alt+K', () => sendShortcutMessage('New Payment'));

    // Payment List(Received):  Alt+Shift+K
    globalShortcut.register('Alt+Shift+K', () => sendShortcutMessage('Payment List(Received)'));

    // // Payment List(Paid): Shift+K
    // globalShortcut.register('Shift+K', () => sendShortcutMessage('Payment List(Paid)'));

    // Create New Payment: Shift+Q
    // globalShortcut.register('Shift+Q', () => sendShortcutMessage('Create New Payment'));

    // New Cash Bank Transfer: Alt+F
    globalShortcut.register('Alt+F', () => sendShortcutMessage('New Cash Bank Transfer'));

    // Cash Bank Fund Transfer List: Alt+Shift+F
    globalShortcut.register('Alt+Shift+F', () => sendShortcutMessage('Cash Bank Fund Transfer List'));

    // Show Cash Bank balance: Alt+G
    globalShortcut.register('Alt+G', () => sendShortcutMessage('Show Cash Bank balance'));

    // 'Fix Payment Mapping' : 'Alt+Shift+M'
    globalShortcut.register('Alt+Shift+M', () => sendShortcutMessage('Fix Payment Mapping Issues'));

    // Receipt List: Alt+Shift+R
    globalShortcut.register('Alt+Shift+R', () => sendShortcutMessage('Receipt List'));

    // Capital Transaction List: Alt+Shift+C
    globalShortcut.register('Alt+Shift+T', () => sendShortcutMessage('Capital Transaction List'));

    // New Capital Accounting Transaction: Alt+T
    globalShortcut.register('Alt+T', () => sendShortcutMessage('New Capital Accounting Transaction'));

    // Manage Opening Balance: Alt+Shift+B
    globalShortcut.register('Alt+Shift+B', () => sendShortcutMessage('Manage Opening Balance'));

    // Journal List: Ctrl+J
    globalShortcut.register('Alt+Shift+J', () => sendShortcutMessage('Journal List'));

    // New Journal: Alt+J
    globalShortcut.register('Alt+J', () => sendShortcutMessage('New Journal'));

    // Inventory Status: Shift+I
    globalShortcut.register('Shift+I', () => sendShortcutMessage('Inventory Status'));

    // Physical Stock Take: Shift+P
    globalShortcut.register('Shift+P', () => sendShortcutMessage('Physical Stock Take'));

    // Record Inventory Loss: Shift+L
    globalShortcut.register('Shift+L', () => sendShortcutMessage('Record Inventory Loss'));

    // Enable / Disable Products: Shift+E
    globalShortcut.register('Shift+E', () => sendShortcutMessage('Enable / Disable Products'));

    // Inventory Level Alerts: Shift+W
    globalShortcut.register('Shift+W', () => sendShortcutMessage('Inventory Level Alerts'));

    // Customer Supplier List: Alt+Shift+C
    globalShortcut.register('Alt+Shift+C', () => sendShortcutMessage('Customer Supplier List'));

    //Create New Supplierr: Alt+1
    globalShortcut.register('Alt+1', () => sendShortcutMessage('Create New Supplier'));

    //Create New Customer: Alt+2
    globalShortcut.register('Alt+2', () => sendShortcutMessage('Create New Customer'));

    // Show Receivables Payables:Alt+Shift+N
    globalShortcut.register('Alt+Shift+N', () => sendShortcutMessage('Show Receivables Payables'));

    // Product List: 'Alt+Shift+I
    globalShortcut.register('Alt+Shift+I', () => sendShortcutMessage('Product List'));

    // Create New Product: Alt+I
    globalShortcut.register('Alt+I', () => sendShortcutMessage('New Product'));

    // Thorough Syncing: Shift+T
    globalShortcut.register('Shift+T', () => sendShortcutMessage('Thorough Syncing'));

    // Unsync Records: Shift+U
    globalShortcut.register('Shift+U', () => sendShortcutMessage('Unsync Records'));

    // Feedback: Shift+F
    globalShortcut.register('Shift+F', () => sendShortcutMessage('Feedback'));

    // Subscription: Ctrl+Shift+S
    globalShortcut.register('CommandOrControl+Shift+S', () => sendShortcutMessage('Subscription'));
}

function unregisterShortcuts() {
    globalShortcut.unregisterAll();
}

module.exports = {
    registerShortcuts,
    unregisterShortcuts
};