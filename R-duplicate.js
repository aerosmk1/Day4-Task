const Array = {"a", "b", "b", "c", "c", "d", "e", "f", "f"};
var List = new ArrayList();

for (int i = 0; i < Array.Length; i++) {
    if (List.Contains(Array[i]) == false) {
        List.Add(Array[i]);
    }
}

var New = List.ToArray();

for (int i = 0; i < New.Length; i++) {
    Console.Write(New[i]);
}