## API Kullanımı

## Main Route : /api/v1

#### Doktor Alanında Tüm öğeleri getir

```http
  GET /<db>/all
```

| Query        | Tip      | Açıklama                              |
| :----------- | :------- | :------------------------------------ |
| `limit`      | `int`    | İstenilen adet                        |
| `first_name` | `string` | Bulunmasını istenilen FirstName alanı |
| `last_name`  | `string` | Bulunması istenilen LastName alanı    |

```http
  GET /doctors/all?limit=50&first_name=A&last_name=B
```

50 adet, isminin içerisinde A bulunan ve Soyisminde B bulunan (Büyük harf küçük harf duyarsız) doktor bilgisi getir.

#### Öğeyi getir

```http
  GET /<db>/${id}
```

| Parametre | Tip      | Açıklama                                      |
| :-------- | :------- | :-------------------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |
