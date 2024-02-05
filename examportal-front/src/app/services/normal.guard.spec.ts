// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { normalGuard } from './normal.guard';

// describe('normalGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => normalGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NormalGuard } from './normal.guard';

describe('NormalGuard', () => {
  let guard: NormalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NormalGuard],
    });

    guard = TestBed.inject(NormalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when conditions are met', () => {
    // You can create your own ActivatedRouteSnapshot and RouterStateSnapshot
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    const canActivate = guard.canActivate(routeSnapshot, routerStateSnapshot);

    expect(canActivate).toBeTruthy();
    // Add more assertions based on your specific guard logic
  });

  // Add more test cases as needed for your guard
});
