container max width: `1280px`;

reset button color: `#e75f5f`;

submit button color: `#0000ffff`;

food card background color: `#ffffff`;

<hr/>
<h3>
1. При первой загрузке страницы (on mount) нужно запросить список блюд,
   вызвав API getFoods(). Метод возвращает список Food.
</h3>
<img alt="img_1.png" src="readme-assets/1_loading.png" width="650px"/>

<hr/>

<h3>
2. После загрузки нужно отрисовать:

- список блюд
- общее количество выбранных блюд
- кнопку Submit
  </h3>

<img alt="img.png" src="readme-assets/2_home.png" width="650px"/>
<img alt="img_7.png" src="readme-assets/2_home-mobile.png" width="200px"/>

<hr/>

<h3>
3. Доступные действия:

- добавить блюдо в заказ
- удалить блюдо из заказа
- очистить заказ (Reset)
- оформить заказ (Submit)
  </h3>

<img alt="img_4.png" src="readme-assets/3_actions.png" width="850px"/>

<hr/>

<h3>
4. При нажатии на Submit:

- вызвать API submitOrder()
- начать проверку статуса заказа вызвав API getOrderState() каждую секунду
- пока статус != Completed, отображать overlay "Pending..."
  </h3>

<img alt="img_8.png" src="readme-assets/4_submit-pending.png" width="850px"/>

![img_6.png](readme-assets/5_submit-completed.png)

<hr/>

<h3>
5. После получения статуса Completed:

- скрыть overlay
- очистить заказ
- вернуться в начальное состояние
  </h3>

<img alt="img.png" src="readme-assets/2_home.png" width="850px"/>
<hr/>