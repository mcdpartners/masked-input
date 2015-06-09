describe('Phone Number Masking', function() {
  var maskedInput = new MaskedInput(window.phone);

  it('exists', function() {
    expect(maskedInput).toBeDefined();
  });

  it('passes for good phone number', function() {
    expect(maskedInput.format('2124509131')).toBe(true);
  });
});