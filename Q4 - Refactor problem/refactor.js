let rates = {
    'ONTARIO' : ONTARIO_RATE,
    'QUEBEC' : QUEBEC_RATE,
    'ALBERTA' : ALBERTA_RATE
}

rate = rates[province] || 1;
amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;

if (province === 'QUEBEC') {
    points = 2;
}
