import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldCareerStatus = {
    #student;
    #youngProfessional;
    #transitioning;
    #other;
  };

  type OldProgram = {
    #aiInfrastructureEngineerAccelerator;
    #aiDataAndAnalyticsEngineerAccelerator;
  };

  type OldApplicationForm = {
    id : Nat;
    program : OldProgram;
    name : Text;
    email : Text;
    careerStatus : OldCareerStatus;
    motivationStatement : Text;
    preferredStartDate : Text;
  };

  type OldActor = {
    applicationForms : Map.Map<Nat, OldApplicationForm>;
    nextId : Nat;
  };

  type NewCareerStatus = {
    #student;
    #youngProfessional;
    #transitioning;
    #other;
  };

  type NewProgram = {
    #aiInfrastructureEngineerAccelerator;
    #aiDataAndAnalyticsEngineerAccelerator;
    #qaTestingProgram;
  };

  type NewApplicationForm = {
    id : Nat;
    program : NewProgram;
    name : Text;
    email : Text;
    careerStatus : NewCareerStatus;
    motivationStatement : Text;
    preferredStartDate : Text;
  };

  type NewActor = {
    applicationForms : Map.Map<Nat, NewApplicationForm>;
    nextId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newForms = old.applicationForms.map<Nat, OldApplicationForm, NewApplicationForm>(
      func(_id, oldForm) {
        {
          id = oldForm.id;
          program = switch (oldForm.program) {
            case (#aiInfrastructureEngineerAccelerator) { #aiInfrastructureEngineerAccelerator };
            case (#aiDataAndAnalyticsEngineerAccelerator) { #aiDataAndAnalyticsEngineerAccelerator };
          };
          name = oldForm.name;
          email = oldForm.email;
          careerStatus = switch (oldForm.careerStatus) {
            case (#student) { #student };
            case (#youngProfessional) { #youngProfessional };
            case (#transitioning) { #transitioning };
            case (#other) { #other };
          };
          motivationStatement = oldForm.motivationStatement;
          preferredStartDate = oldForm.preferredStartDate;
        };
      }
    );
    {
      applicationForms = newForms;
      nextId = old.nextId;
    };
  };
};
