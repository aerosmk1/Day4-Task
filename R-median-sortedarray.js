
for (count = 0; count <= n; count++) 
{ 
	if (i == n) 
	{ 
		m1 = m2; 
		m2 = ar2[0]; 
		break; 
	} 
	else if (j == n) 
	{ 
		m1 = m2; 
		m2 = ar1[0]; 
		break; 
	} 
	if (ar1[i] <= ar2[j]) 
	{ 
	
		m1 = m2; 
		m2 = ar1[i]; 
		i++; 
	} 
	else
	{ 
		
		m1 = m2; 
		m2 = ar2[j]; 
		j++; 
	} 
} 
return (m1 + m2)/2; 