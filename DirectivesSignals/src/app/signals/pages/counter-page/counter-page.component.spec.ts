import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterPageComponent } from "./counter-page.component";
import { CommonModule } from "@angular/common";

describe("Test suite for CounterPageComponent", () => {
  //Instance of the component that will be created by the Fixture
  let component: CounterPageComponent;
  //Component fixture that will be used to create the component instance and detect changes on it
  let fixture: ComponentFixture<CounterPageComponent>;

  beforeEach(async () => {
    //Configure the testing module to test the CounterPageComponent
    await TestBed.configureTestingModule({
      declarations: [CounterPageComponent],
      imports: [CommonModule]
    }).compileComponents();
  })

  //Running the beforeEach function before each test case
  beforeEach(() => {
    //Create the component instance and detect changes on it
    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it("should create the CounterPageComponent", () => {
    expect(component).toBeTruthy();
  })

  it("should increment the counter", () => {
    //Call a method of the component
    component.increment();
    component.increment();
    expect(component.counter()).toBe(2);
  })

  it("should decrement the counter", () => {
    component.decrement();
    component.decrement();
    expect(component.counter()).toBe(-2);
  })

  it("should reset the counter", () => {
    component.increment();
    component.reset();
    expect(component.counter()).toBe(0);
  })

  it("should square the counter", () => {
    component.increment();
    component.increment();
    expect(component.squareCounter()).toBe(4);
  })

  it("should square the counter after decrement", () => {
    component.increment();
    component.decrement();
    expect(component.squareCounter()).toBe(0);
  })

  it("should render the counter", () => {
    component.increment();
    fixture.detectChanges();
    //Access the native element of the fixture, that is the DOM element of the component
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Counter: 1");
  })

  it("should render the squared counter", () => {
    component.increment();
    component.increment();
    //IMPORTANT: You need to call detectChanges() after changing the component state to update the view, so it can reflect the changes in the template
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    //Check if the h2 element contains the text "Square Counter: 4"
    expect(compiled.querySelector("h2").textContent).toContain("Square Counter: 4");
  })
 });
