import Text "mo:core/Text";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  public type CareerStatus = {
    #student;
    #youngProfessional;
    #transitioning;
    #other;
  };

  public type Program = {
    #aiInfrastructureEngineerAccelerator;
    #aiDataAndAnalyticsEngineerAccelerator;
    #qaTestingProgram;
  };

  public type ApplicationForm = {
    id : Nat;
    program : Program;
    name : Text;
    email : Text;
    careerStatus : CareerStatus;
    motivationStatement : Text;
    preferredStartDate : Text;
  };

  module ApplicationForm {
    public func compare(form1 : ApplicationForm, form2 : ApplicationForm) : Order.Order {
      Nat.compare(form1.id, form2.id);
    };
  };

  var nextId = 0;
  let applicationForms = Map.empty<Nat, ApplicationForm>();

  public shared ({ caller }) func submitApplication(
    program : Program,
    name : Text,
    email : Text,
    careerStatus : CareerStatus,
    motivationStatement : Text,
    preferredStartDate : Text,
  ) : async Nat {
    let applicationForm : ApplicationForm = {
      id = nextId;
      program;
      name;
      email;
      careerStatus;
      motivationStatement;
      preferredStartDate;
    };
    applicationForms.add(nextId, applicationForm);
    nextId += 1;
    applicationForm.id;
  };

  public query ({ caller }) func getApplication(id : Nat) : async ApplicationForm {
    switch (applicationForms.get(id)) {
      case (null) { Runtime.trap("Application does not exist") };
      case (?application) { application };
    };
  };

  public query ({ caller }) func getAllApplications() : async [ApplicationForm] {
    applicationForms.values().toArray().sort();
  };
};
